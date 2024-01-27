import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


// always use 'use' when creating custom hooks for the react to know that it is a hook
//it's recommended not mandatory , recommended standard way for code readability

const useRestaurantMenu = (resId) =>{

    console.log("Resid ",resId);

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    fetchMenu= async()=>{
        const data = await fetch(MENU_API+resId); 

        const json = await data.json();

        setResInfo(json);
        
    }   

    return resInfo;
    

}


export default useRestaurantMenu;