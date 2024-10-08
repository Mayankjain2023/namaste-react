import RestoCard, { withPromotedLabel } from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
import UserData from "../utils/userContext";







const Body = () =>{

    //NEVER CREATE useState() outside of your components or inside if/else
    //useState() => it is used to create local state variables 

  //declaring state variable -> requires a default state inside useState
  //whenever you change the local state variable react re-renders the component
  let [listOfRes,setListOfRes] = useState([]);
  let [filteredRestaurants,setFilteredRes] = useState([]);
  let [searchText,setSearchText] = useState('');
    // console.log(listOfRes);
  const RestrocardPromoted = withPromotedLabel(RestoCard);  


    // useEffect hook (takes 2 arguements) as soon as body component renders it calls the callback function
    //if useEffect has empty dependency array??

    useEffect(()=>{
        fetchData();
    },[])

    fetchData = async()=>{
        // console.log("fetching data");
        const data = await fetch(SWIGGY_API);

        const jsonData  = await data.json();
        // console.log("data",jsonData.data.cards);

        const finalData = jsonData.data.cards.filter((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length>0)
        // console.log(finalData);

                setListOfRes(finalData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRes(finalData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

   const userInfo = useContext(UserData);



    const onlineStatus =  useOnlineStatus();

    if(onlineStatus === false){
        return (
            <h1>
                 "Looks like you are offline!! Please check your internet connection";
            </h1>
        )
    }

  

    return (listOfRes.length === 0)? <ShimmerUI/> :(
        <div className="body m-4">
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                        <input type="text" className="border border-solid border-black" onChange={(e)=>{console.log(e.target.value),setSearchText(e.target.value)}} placeholder="Search" value={searchText}/>
                            <button className="m-4 px-2 py-1 border-solid bg-green-400 rounded-lg"  
                            onClick={()=>{
                                console.log("click")
                                 const filteredRestaurants = listOfRes.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                                if(filteredRestaurants.length >0){
                                    setFilteredRes(filteredRestaurants);    
                                }
                                }
                            }>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="m-2 p-2 bg-gray-100 h-10 rounded-lg"  onClick={
                    ()=>{

                        const filterList= listOfRes.filter((res)=> res.info.avgRating>4);
                        setFilteredRes(filterList);
                        console.log(listOfRes);

                    }
                    }> Top Rated Restaurants</button>
                      <div >
                <label className="font-bold p-2">Username</label>
                <input className="mt-2 p-2 border border-black" value={userInfo.firstName} onChange={(e)=>{userInfo.setUserName(e.target.value)}}></input>
                </div>
                </div>
              
                
        
            </div>
            <div className="flex flex-wrap">
                    {
                        //always give a key when looping and passing it to props as each prop must be uniquely represented
                        //don't use index as keys
                        
                        filteredRestaurants.map((res) => (
                            <Link key={res.info.id} to ={"/restaurant/"+res.info.id}>
                                {
                                /** if restaurant is promoted pass the restocard component to withPromoted function to get the enchanced card */
                                !res.info.promoted ? <RestrocardPromoted resData={res.info}></RestrocardPromoted> : <RestoCard resData={res.info}></RestoCard>
                                }
                              
                        {/* <RestoCard  resData = {res.info}/> */}
                            </Link>
                       

                        ))
                    }

            </div>
        </div>
    )
}


export default Body;