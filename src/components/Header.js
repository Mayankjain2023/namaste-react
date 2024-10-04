import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserData from "../utils/userContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";




const Header = () =>{
    let btnName = "Logout";

    //while using react and to route to another page , do not use anchor tag <a>
    //use LINK component provided by the react 
    //as <a> reloads the page where as Link comp just replaces the component with child component
    const [loginState,setLoginState] = useState('Logout');
    const onlineStatus = useOnlineStatus();
    const userInfo = useContext(UserData);
    // console.log("user",userInfo)


    //to read the data from the store we use selector and selector is a hook
    const cartItems = useSelector((store)=>store.cart.items)
    console.log("cartItems",cartItems);


    return (

     
        <div className="flex justify-between bg-pink-200 shadow-lg mb-4 sm:bg-yellow-100 lg:bg-green-100">
            <div className="">
                <img className= "w-32" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus? "🟢" :"🔴" }
                    </li>
                    <li className="px-4">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to='/about'>
                        About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to='/contact'>
                        Contact Us
                        </Link>
                    </li>
                    <li className="px-4 text-xl font-bold">
                        <Link to='/cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        ({cartItems.length})
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>
                            Grocery
                        </Link>
                    </li>
                   
                    
                    <span >
                        <button className="btn" onClick={()=>{console.log("click"); loginState == 'Login' ? setLoginState('Logout') : setLoginState('Login')}}>
                          {loginState}
                        </button>
                    </span>
                    <span  className="mx-2 px-2"> {userInfo.firstName}</span>

                    
                </ul>
            </div>    
        </div>
        
    )
}


export default Header


