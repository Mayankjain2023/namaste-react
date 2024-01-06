import RestoCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./Shimmer";







const Body = () =>{



  //declaring state variable -> requires a default state inside useState
  let [listOfRes,setListOfRes] = useState([]);
    console.log(listOfRes);


    // useEffect hook (takes 2 arguements) as soon as body component renders it calls the callback function
    useEffect(()=>{
        fetchData();
    },[])

    fetchData = async()=>{
        console.log("fetching data");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.686263&lng=77.3399802&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData  = await data.json();
        console.log("data",jsonData.data.cards);

        const finalData = jsonData.data.cards.filter((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length>0)
        console.log(finalData);

        // if(jsonData && jsonData.data && jsonData.data.cards[2]){
            // if(jsonData.data.cards[2] && jsonData.data.cards[2].card && jsonData.data.cards[2].card.card.gridElements &&jsonData.data.cards[2].card.card.gridElements.infoWithStyle){
                setListOfRes(finalData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // }
        // }

    }


    // if(listOfRes.length === 0){
    //     // return <h1>Loding....</h1>
    //     return <ShimmerUI/>
    // }


    return (listOfRes.length === 0)? <ShimmerUI/> :(
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
                        <RestoCard key={res.info.id} resData = {res.info}/>
                       

                        ))
                    }

                </div>
        </div>
    )
}


export default Body;