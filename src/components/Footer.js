
import { useContext } from "react";
import UserData from "../utils/userContext";

const Footer = ()=>{
    const userInfo = useContext(UserData)

    return (
        <div className="footer">
            {/* Footer */}
            <div className="m-4 p-4 font-bold"></div>
        </div>
    )
}



export default Footer;