function PostSignup() {
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
                <div className="post-signup-logout"> <a href="/">Logout</a> </div>
            </div>
        </div>
    )
}

export default PostSignup;
