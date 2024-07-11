import { TiMinus } from "react-icons/ti";
import { IoArrowForwardCircle } from "react-icons/io5";
import {Link} from 'react-router-dom';
const Onboarding3 = () => {
    return (
        <div className="onboarding-section second-onboarding-page d-flex justify-content-center ">
            <div className="onboarding-content-box" id="third-onboard-content-box">
                <div className="onboard-inner-box-one">
                    <h4 className="fw-bold">We serve incomparable delicacies</h4>
                    <p className="mb-0">All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</p>
                    <div className="onboard-indicators indicator-two indicator-three d-flex justify-content-center">
                        <div><TiMinus /></div>
                        <div><TiMinus /></div>
                        <div><TiMinus /></div>
                    </div>
                </div>
                <div className="third-onboard-next-btn d-flex justify-content-center">
                    <Link to="/login"><IoArrowForwardCircle /></Link>
                </div>
            </div>
        </div>
    )
}

export default Onboarding3;