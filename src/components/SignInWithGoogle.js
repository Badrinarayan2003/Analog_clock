import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
    const navigate = useNavigate()

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result)
            const user = result.user;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    userName: user.displayName,
                    profile_image: user.photoURL,
                });
                navigate("/profile");
            }

        } catch (error) {
            if (error.code === 'auth/cancelled-popup-request') {
                console.log('Popup request was cancelled. Please try again.');
            } else if (error.code === 'auth/popup-closed-by-user') {
                console.log('Popup was closed before completing the sign-in process.');
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }

    }



    return (
        <div
            className="google-icon d-flex justify-content-center align-items-center"
            onClick={googleLogin}
        >
            <img src="./images/google-icon.png" alt="google-icon" />
        </div>
    )
}
export default SignInWithGoogle;