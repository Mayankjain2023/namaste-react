import RestoCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./Shimmer";







const Body = () =>{



  //declaring state variable -> requires a default state inside useState
  //whenever you change the local state variable react re-renders the component
  let [listOfRes,setListOfRes] = useState([]);
  let [filteredRestaurants,setFilteredRes] = useState([]);
  let [searchText,setSearchText] = useState('');
    // console.log(listOfRes);


    // useEffect hook (takes 2 arguements) as soon as body component renders it calls the callback function
    useEffect(()=>{
        fetchData();
    },[])

    fetchData = async()=>{
        // console.log("fetching data");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.686263&lng=77.3399802&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData  = await data.json();
        // console.log("data",jsonData.data.cards);

        const finalData = jsonData.data.cards.filter((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length>0)
        // console.log(finalData);

                setListOfRes(finalData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRes(finalData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }


  

    return (listOfRes.length === 0)? <ShimmerUI/> :(
        <div className="body">
            <div className="filter">
                <div className="search-box">
                        <input type="text" onChange={(e)=>{console.log(e.target.value),setSearchText(e.target.value)}} placeholder="Search" value={searchText}/>
                            <button className="search-btn"  
                            onClick={()=>{
                                console.log("click")
                                 const filteredRestaurants = listOfRes.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                                if(filteredRestaurants.length >0){
                                    setFilteredRes(filteredRestaurants);    
                                }
                                }
                            }>Search</button>
                </div>
                <button className="filter-btn"  onClick={
                    ()=>{

                        const filterList= listOfRes.filter((res)=> res.info.avgRating>4);
                        setFilteredRes(filterList);
                        console.log(listOfRes);

                    }
                    }> Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {
                        //always give a key when looping and passing it to props as each prop must be uniquely represented
                        //don't use index as keys
                        
                        filteredRestaurants.map((res) => (
                        <RestoCard key={res.info.id} resData = {res.info}/>
                       

                        ))
                    }

                </div>
        </div>
    )
}


export default Body;