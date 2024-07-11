import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [isvisible, setIsvisible] = useState(false)

    return (
        <div className="Login-signup-section d-flex justify-content-center align-items-center">
            <div className="login-signup-form">
                <div className="form-heading">
                    <h4 className="fw-bold">Login to your account.</h4>
                    <p>Please sign in to your account</p>
                </div>
                <div className="login-signup-input-box">
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label fw-bold mb-1">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-0">
                        <label htmlFor="password" className="form-label fw-bold mb-1">Password</label>
                        <input type={isvisible ? "text" : "password"} className="form-control" id="password" placeholder="Password" />
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
                    <div className="google-icon d-flex justify-content-center align-items-center">
                        <img src="./images/google-icon.png" alt="google-icon" />
                    </div>
                </div>
                <p className="register-link text-center">Don't have an account? <Link to="/signup">Register</Link></p>
            </div>
        </div>
    )
}

export default Login;