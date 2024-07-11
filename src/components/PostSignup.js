import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

function PostSignup() {
    const navigate = useNavigate()


    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate("/login");
            console.log("user logged out successfully!");

        } catch (error) {
            console.log("error loggin out!", error.message);
        }
    }


    return (
        <div className="post-signup-section d-flex justify-content-center align-items-end">
            <div className="post-signup-content-box d-flex align-items-center">
                <div className="post-signup-img-box mb-3">
                    <img src="./images/successful.png" alt="success-image" />
                </div>
                <h5 className="fw-bold mb-4">Login Successful</h5>
                <div className="post-signup-btn mb-3">
                    <button>Go to Tracking Screen</button>
                </div>
                <div className="post-signup-logout" onClick={handleLogout}> <span>Logout</span> </div>
            </div>
        </div>
    )
}

export default PostSignup;
