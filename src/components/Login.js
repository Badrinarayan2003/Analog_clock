import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

import SignInWithGoogle from "./SignInWithGoogle";

function Login() {
    const [isvisible, setIsvisible] = useState(false)
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState(false)

    const handleChange = (evt) => {
        const newName = evt.target.name
        const newVal = evt.target.value
        setLoginData((pre) => {
            return { ...pre, [newName]: newVal }
        })
    }

    const handleClick = async (evt) => {
        evt.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            console.log("user logged in successfully");
            navigate("/profile")
        } catch (error) {
            console.log(error.message);
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 3000);
        }

        setLoginData({
            email: "",
            password: ""
        })
    }

    return (
        <div className="Login-signup-section d-flex justify-content-center align-items-center">
            {errorMsg ? (<p className="signup-error-msg mb-2 fw-bold">Wrong Email or Password</p>) : ""}
            <form className="login-signup-form" onSubmit={handleClick}>
                <div className="form-heading">
                    <h4 className="fw-bold">Login to your account.</h4>
                    <p>Please sign in to your account</p>
                </div>
                <div className="login-signup-input-box">
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label fw-bold mb-1">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={handleChange} value={loginData.email} required />
                    </div>
                    <div className="mb-0">
                        <label htmlFor="password" className="form-label fw-bold mb-1">Password</label>
                        <input type={isvisible ? "text" : "password"} className="form-control" id="password" placeholder="Password" name="password" onChange={handleChange} value={loginData.password} required />
                        <span className="eye-btn" onClick={() => setIsvisible(!isvisible)}> {isvisible ? <FaEye /> : <FaEyeSlash />}</span>
                    </div>
                </div>
                <div className="forget-pass-box d-flex justify-content-end mb-3">
                    <a href="/">Forgot password?</a>
                </div>
                <div className="login-signup-btn mb-3">
                    <button>Sign in</button>
                </div>
                <p className="or-sign-in-with text-center">----------Or sign in with----------</p>

                <div className="d-flex justify-content-center align-items-center mb-4">
                    <SignInWithGoogle />
                </div>
                <p className="register-link text-center">Don't have an account? <Link to="/signup">Register</Link></p>
            </form>
        </div>
    )
}

export default Login;