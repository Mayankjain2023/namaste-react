import { useEffect ,useState} from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu =()=>{


    //we can create our own custom hook in order to manage state and api call for the restaurant menu
    //hooks are utility functions/helper functions 
    //always keep separate file for every hook


    // const [restaurantInfo,setRestaurantInfo] = useState(null);
    const {resId}  = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

    // useEffect(()=>{
    //         fetchMenu();        
    // },[])

    // const fetchMenu = async() => {
    //     const data = await fetch(MENU_API + resId);
    //     const menuItems = await data.json();
    //     console.log("Menu",menuItems);
    //     setRestaurantInfo(menuItems);

    // }




    if(restaurantInfo === null ) return <ShimmerUI/>
    console.log('Res',restaurantInfo);
    const {name,cuisines,costForTwo} = restaurantInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    const categories = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>{
        console.log("c",card.card.card['@type']);
        return card?.card.card['@type'].includes('type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    } );
    console.log("categories",categories);
    return (
        <div className="text-center">
            <div >
                <h1 className="font-bold mt-2 text-2xl">{name}</h1>
                <p  className="font-bold text-lg">{cuisines.join(', ')} - {costForTwo}</p>

                <div className="">
                    {categories.map(c=> <RestaurantCategory key={c?.card?.card?.title} data = {c}/> )}
                </div>
                {/* <ul>
                    {itemCards.map(i=><li key = {i?.card?.info?.id} >{i?.card?.info?.name} - {'Rs. '} {i?.card?.info?.price ? i?.card?.info?.price : i?.card?.info?.defaultPrice } </li>)}
                </ul> */}
            </div>
            
        </div>
    )


}


export default RestaurantMenu;