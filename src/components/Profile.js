import { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

function Profile() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {

            if (user) {                                         //  Check if user is not null
                console.log(user);
                try {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                        console.log(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);   // Changed: Error logging
                }
            } else {
                console.log("user is not logged in");   // if user is not logged in
            }
        });
    };

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <>
            {
                userDetails ? (
                    <div className="tracking-page-section text-center" >
                        TRACKING PAGE
                        <p> Username: {userDetails.userName}</p >
                        <p>Email:{userDetails.email}</p>
                        <p>image:{userDetails.profile_image}</p>
                        <div style={{ width: '50px', height: '50px' }}>
                            <img src={userDetails.profile_image} alt="prfile_img"/>
                        </div>
                    </div >
                ) : (
                    <Loading />
                )
            }
        </>
    )
}
export default Profile;