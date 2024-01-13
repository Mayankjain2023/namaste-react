import { useEffect ,useState} from "react";
import ShimmerUI from "./Shimmer";


const RestaurantMenu =()=>{



    const [restaurantInfo,setRestaurantInfo] = useState(null);

    useEffect(()=>{
            fetchMenu();        
    },[])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.444151&lng=78.387673&restaurantId=");
        const menuItems = await data.json();
        console.log("Menu",menuItems);

    }

    console.log("MENU COMPONENT");


    // if(restaurantInfo === null ) return <ShimmerUI/>
    const {name,cuisines,costForTwo} = resInfo?.cars[0]?.cards?.cards?.info;

    return (restaurantInfo === null) ? <ShimmerUI/> : (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')} - {costForTwo}</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>


            </ul>
        </div>
    )


}


export default RestaurantMenu;