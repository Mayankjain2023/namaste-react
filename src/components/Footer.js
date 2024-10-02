
import { useContext } from "react";
import UserData from "../utils/userContext";

const Footer = ()=>{
    const userInfo = useContext(UserData)

    return (
        <div className="footer">
            Footer
            <div className="m-2 p-2 font-bold">{userInfo.firstName}</div>
        </div>
    )
}



export default Footer;