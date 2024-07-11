import { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
// import { doc, getDoc } from "firebase/firestore";

function TrackingPage() {
    // const [userDetails, setUserDetails] = useState(null)

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            console.log("i am in tracking page");
        })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div className="tracking-page-section text-center">
            TRACKING PAGE
        </div>
    )
}
export default TrackingPage;