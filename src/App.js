import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter,RouterProvider } from "react-router-dom";




//props-> prop drilling (arguments to a function [equivalent])
//writing props as {resName,rate} -> destructuring on the fly

//Config driven UI - > to be studied 
/**
 * Data has config which defines different paramenters for different portions of ui
 * based on regions/language/preferences etc
 * Keeps the application modular and more persoalized
 * 
 */







const AppLayout = () =>{
    return(
        <div className= "app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<ContactUs/>
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>)