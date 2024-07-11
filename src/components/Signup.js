import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Signup() {
    const [isvisible, setIsvisible] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="Login-signup-section d-flex justify-content-center align-items-center">
            <div className="login-signup-form">
                <div className="form-heading">
                    <h4 className="fw-bold mb-1">Create your new account</h4>
                    <p className="mb-1">Create an account to start looking for the food you like</p>
                </div>
                <div className="login-signup-input-box">
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label fw-bold mb-1">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userName" className="form-label fw-bold mb-1">User Name</label>
                        <input type="text" className="form-control" id="userName" placeholder="User Name" />
                    </div>
                    <div className="mb-0">
                        <label htmlFor="password" className="form-label fw-bold mb-1">Password</label>
                        <input type={isvisible ? "text" : "password"} className="form-control" id="password" placeholder="Password" />
                        <span className="eye-btn" onClick={() => setIsvisible(!isvisible)}> {isvisible ? <FaEye /> : <FaEyeSlash />}</span>
                    </div>
                </div>
                <div className="terms-policy-link form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        I Agree with <a href="/">Terms</a> and <a href="/">Privacy Policy</a>
                    </label>
                </div>
                <div className="login-signup-btn mb-3">
                    <button
                        onClick={() => navigate("/postsignup")}
                    >Register</button>
                </div>
                <p className="or-sign-in-with text-center mb-2">----------Or sign in with----------</p>

                <div className="d-flex justify-content-center align-items-center mb-2">
                    <div className="google-icon d-flex justify-content-center align-items-center">
                        <img src="./images/google-icon.png" alt="google-icon" />
                    </div>
                </div>
                <p className="register-link text-center mb-0">Have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
    )
}

export default Signup;