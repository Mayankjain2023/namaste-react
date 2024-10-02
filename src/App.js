import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { lazy,Suspense } from "react";
import UserData from "./utils/userContext";




//props-> prop drilling (arguments to a function [equivalent])
//writing props as {resName,rate} -> destructuring on the fly

//Config driven UI - > to be studied 
/**
 * Data has config which defines different paramenters for different portions of ui
 * based on regions/language/preferences etc
 * Keeps the application modular and more persoalized
 * 
 */




//Optimmizations
/*
 chunking == 
 code splitting ==  dynamic bundling == on demand loading i.e load the component only when it is required/asked to be loaded

*/  


const Grocery = lazy(()=>import("./components/Grocery"));




const AppLayout = () =>{

    //dummy auth code (if) how to update the user across app -> userData(component).provider -> to provide value across app (can be used multiple times)
    const [userName,setUserName] = useState();
    useEffect(()=>{
        const data = {
            firstName:"Ajay"
        }
        setUserName(data.firstName)
    },[]) //want to call it only once
    

    return(
        <div className= "app">
            <UserData.Provider value={{firstName:userName,setUserName}}>
                <Header/>
                <Outlet/>
            </UserData.Provider>
            <Footer/>
        </div>
    )
}

// child component replaces the outlet component
// based on the url path 


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/grocery',
                element:<Suspense><Grocery/></Suspense>  
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ]
    },
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>)