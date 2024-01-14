import { useEffect ,useState} from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu =()=>{

    const [restaurantInfo,setRestaurantInfo] = useState(null);
    const {resId}  = useParams();

    useEffect(()=>{
            fetchMenu();        
    },[])

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const menuItems = await data.json();
        console.log("Menu",menuItems);
        setRestaurantInfo(menuItems);

    }

    console.log("MENU COMPONENT");



    if(restaurantInfo === null ) return <ShimmerUI/>
    console.log('Res',restaurantInfo);
    const {name,cuisines,costForTwo} = restaurantInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards} = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')} - {costForTwo}</h2>
            <ul>

                {itemCards.map(i=><li key = {i?.card?.info?.id} >{i?.card?.info?.name} - {'Rs. '} {i?.card?.info?.price ? i?.card?.info?.price : i?.card?.info?.defaultPrice } </li>)}
              

            </ul>
        </div>
    )


}


export default RestaurantMenu;