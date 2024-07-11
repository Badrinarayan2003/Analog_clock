import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";

function Signup() {
    const navigate = useNavigate()
    const [isvisible, setIsvisible] = useState(false)
    const [signupData, setSignupData] = useState({
        email: "",
        username: "",
        password: ""
    })
    const [errorMsg, setErrorMsg] = useState(false)

    const handleChange = (evt) => {
        const newName = evt.target.name
        const newVal = evt.target.value
        setSignupData((pre) => {
            return { ...pre, [newName]: newVal }
        })
    }

    const handleClick = async (evt) => {
        evt.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
            const user = auth.currentUser;
            console.log(user);

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    userName: signupData.username,
                })
            }
            console.log("register successfully!");
            navigate("/postsignup")

        } catch (error) {
            console.log(error.message);
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 3000);
        }

        setSignupData({
            email: "",
            username: "",
            password: ""
        })
    };


    return (
        <div className="Login-signup-section d-flex justify-content-center align-items-center">
            {errorMsg ? (<p className="signup-error-msg mb-2 fw-bold">Email Already Registered!</p>) : ""}
            <form className="login-signup-form" onSubmit={handleClick}>
                <div className="form-heading">
                    <h4 className="fw-bold mb-1">Create your new account</h4>
                    <p className="mb-1">Create an account to start looking for the food you like</p>
                </div>
                <div className="login-signup-input-box">
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label fw-bold mb-1">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={handleChange} value={signupData.email} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userName" className="form-label fw-bold mb-1">User Name</label>
                        <input type="text" className="form-control" id="userName" placeholder="User Name" name="username" onChange={handleChange} value={signupData.username} required />
                    </div>
                    <div className="mb-0">
                        <label htmlFor="password" className="form-label fw-bold mb-1">Password</label>
                        <input type={isvisible ? "text" : "password"} className="form-control" id="password" placeholder="Password" name="password" onChange={handleChange} value={signupData.password} required />
                        <span className="eye-btn" onClick={() => setIsvisible(!isvisible)}> {isvisible ? <FaEye /> : <FaEyeSlash />}</span>
                    </div>
                </div>
                <div className="terms-policy-link form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked required />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I Agree with <a href="/">Terms</a> and <a href="/">Privacy Policy</a>
                    </label>
                </div>
                <div className="login-signup-btn mb-3">
                    <button>Register</button>
                </div>
                <p className="or-sign-in-with text-center mb-2">----------Or sign in with----------</p>

                <div className="d-flex justify-content-center align-items-center mb-2">
                    <div className="google-icon d-flex justify-content-center align-items-center">
                        <img src="./images/google-icon.png" alt="google-icon" />
                    </div>
                </div>
                <p className="register-link text-center mb-0">Have an account? <Link to="/login">Sign in</Link></p>
            </form>
        </div>
    )
}

export default Signup;