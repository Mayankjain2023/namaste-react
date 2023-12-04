import RestoCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";







const Body = () =>{



  //declaring state variable -> requires a default state inside useState
  let [listOfRes,setListOfRes] = useState([resList]);



    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"  onClick={
                    ()=>{

                        const filteredList = listOfRes.filter((res)=> res.rating>4);
                        setListOfRes(filteredList);
                        console.log(listOfRes);

                    }
                    }> Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {
                        //always give a key when looping and passing it to props as each prop must be uniquely represented
                        //don't use index as keys
                        listOfRes.map((res) => (
                        <RestoCard key={res.id} resData = {res}/>
                        ))
                    }

                </div>
        </div>
    )
}


export default Body;