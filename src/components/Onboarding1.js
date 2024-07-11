import { TiMinus } from "react-icons/ti";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Onboarding1 = () => {
    return (
        <div className="onboarding-section d-flex justify-content-center ">
            <div className="onboarding-content-box">
                <div className="onboard-inner-box-one">
                    <h4 className="fw-bold">We serve incomparable delicacies</h4>
                    <p className="mb-0">All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</p>
                    <div className="onboard-indicators d-flex justify-content-center">
                        <div><TiMinus /></div>
                        <div><TiMinus /></div>
                        <div><TiMinus /></div>
                    </div>
                </div>
                <div className="onboard-inner-box-two d-flex justify-content-between">
                    <div> <Link to="/login" className="fw-bold">Skip</Link> </div>
                    <div> <Link to="/onboarding2" className="fw-bold">Next <MdOutlineArrowRightAlt /></Link> </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding1;