import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * Header
 * - Logo 
 * - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      -RestaurantCard
 *            ->image
 *            ->Name
 *            ->Cuisines
 *            ->Rate/offer
 * Footer
 * -Copyright
 * -Links
 * -Address 
 * -Contact
 * 
 */


const Header = () =>{
    return (
        <div className="heading">
            <div className="logo-container">
               <img className="logo" src="data:image/png;base64,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"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                </ul>
            </div>    
        </div>
        
    )
}

//props-> prop drilling (arguments to a function [equivalent])
//writing props as {resName,rate} -> destructuring on the fly

//Config driven UI - > to be studied 
/**
 * Data has config which defines different paramenters for different portions of ui
 * based on regions/language/preferences etc
 * Keeps the application modular and more persoalized
 * 
 */

const RestoCard = (props)=>{
    const {resData } = props;
    console.log(resData);
    const {name,cuisine,rating,phone} = resData

    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>Rate : {rating} </h4>
            <span>
                Phone : {phone}
            </span>
        </div>
    )
}


 const resList =  [
        {
          "id": 1,
          "name": "Delicious Delights",
          "cuisine": "Italian",
          "address": "123 Main Street, Cityville",
          "phone": "+1 (555) 123-4567",
          "image": "https://example.com/delicious_delights.jpg",
          "rating": 4.5,
          "menu": [
            {
              "id": 101,
              "name": "Margherita Pizza",
              "price": 12.99
            },
            {
              "id": 102,
              "name": "Pasta Carbonara",
              "price": 15.99
            },
            {
              "id": 103,
              "name": "Tiramisu",
              "price": 8.99
            }
          ]
        },
        {
          "id": 2,
          "name": "Spicy Bites",
          "cuisine": "Mexican",
          "address": "456 Oak Avenue, Townsville",
          "phone": "+1 (555) 987-6543",
          "image": "https://example.com/spicy_bites.jpg",
          "rating": 4.2,
          "menu": [
            {
              "id": 201,
              "name": "Tacos",
              "price": 9.99
            },
            {
              "id": 202,
              "name": "Burrito Bowl",
              "price": 11.99
            },
            {
              "id": 203,
              "name": "Churros",
              "price": 6.99
            }
          ]
        },
        {
          "id": 3,
          "name": "Sushi Haven",
          "cuisine": "Japanese",
          "address": "789 Pine Street, Villagetown",
          "phone": "+1 (555) 234-5678",
          "image": "https://example.com/sushi_haven.jpg",
          "rating": 4.8,
          "menu": [
            {
              "id": 301,
              "name": "Sashimi Platter",
              "price": 18.99
            },
            {
              "id": 302,
              "name": "Dragon Roll",
              "price": 14.99
            },
            {
              "id": 303,
              "name": "Green Tea Ice Cream",
              "price": 7.99
            }
          ]
        }
      ]

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>

                <div className="res-container">
                    {
                        //always give a key when looping and passing it to props as each prop must be uniquely represented
                        //don't use index as keys
                        resList.map((res) => (
                        <RestoCard key={res.id} resData = {res}/>
                        ))
                    }

                </div>
        </div>
    )
}

const Footer = ()=>{
    return (
        <div className="footer">
            Footer
        </div>
    )
}




const AppLayout = () =>{
    return(
        <div className= "app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout/>);