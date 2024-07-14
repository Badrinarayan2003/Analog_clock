import { IoMdLogOut } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";


const Navbar = (userDetails) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const profileRef = useRef(null);
    const navigate = useNavigate();
    const [profileDetail, setProfileDetail] = useState({})

    const handleClickInside = () => {
        setIsClicked(!isClicked)
        setIsHovered(false)
    }

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setProfileDetail(userDetails && userDetails.userDetails)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
        <div className="w-100 text-end">
            <nav className="navbar navbar-light bg-light py-2">
                <div className="container-fluid px-3">
                    <span className="navbar-brand mb-0 h1 fw-bold">Analog Clock</span>
                    <div
                        className="nav-profile-img-box"
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                        onClick={handleClickInside}
                        ref={profileRef}
                    >
                        {
                            profileDetail?.profile_image ?
                                (<img className="text-center fw-bold" src={profileDetail?.profile_image} alt="p_img" />)
                                : (<div className="text-center fw-bold">{profileDetail?.userName?.toUpperCase()?.slice(0, 1)}</div>)
                        }
                    </div>
                </div>
            </nav>
            <span className={`nav-p-name me-5 ${isHovered ? "show-p-name" : "hide-p-name"}`}>{profileDetail?.userName}</span>
            <div className={`nav-profile-detail-box d-flex text-start ${isClicked ? "show-p-name" : "hide-p-name"}`}>
                <p className="mb-2">{profileDetail?.userName?.slice(0,12)}</p>
                <p
                    className="mb-1"
                    onClick={handleLogout}
                >Logout <span><IoMdLogOut /></span></p>
            </div>
        </div>
    )
}

export default Navbar;