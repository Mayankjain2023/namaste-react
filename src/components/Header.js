import { useState } from "react"
import { LOGO_URL } from "../utils/constants"




const Header = () =>{
    let btnName = "Logout";


    const [loginState,setLoginState] = useState('Logout');

    return (

     
        <div className="heading">
            <div className="logo-container">
                <img className= "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                    <span >
                        <button className="login-button" onClick={()=>{console.log("click"); loginState == 'Login' ? setLoginState('Logout') : setLoginState('Login')}}>
                          {loginState}
                        </button>
                    </span>
                    
                </ul>
            </div>    
        </div>
        
    )
}


export default Header


