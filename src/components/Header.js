import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Header = () =>{
    let btnName = "Logout";

    //while using react and to route to another page , do not use anchor tag <a>
    //use LINK component provided by the react 
    //as <a> reloads the page where as Link comp just replaces the component with child component
    const [loginState,setLoginState] = useState('Logout');
    const onlineStatus = useOnlineStatus();


    return (

     
        <div className="heading">
            <div className="logo-container">
                <img className= "logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus? "🟢" :"🔴" }
                    </li>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                        Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/cart'>
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link to='/grocery'>
                            Grocery
                        </Link>
                    </li>

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


