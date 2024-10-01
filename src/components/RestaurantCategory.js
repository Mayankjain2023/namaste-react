
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
    // console.log("c",props);
    console.log('show',showItems);

    // let [showItems,setShowItems] = useState(false)

    const handleClick = ()=>{
        setShowIndex()
    }


    const {card} = data.card;

    return <div>
        {/* header */}
        <div className="w-6/12 bg-gray-100 p-4 mx-auto my-2 rounded-md shadow-md ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-center text-xl">{card.title}({card.itemCards.length}) </span>
                <span>⌄</span>
            </div>
            <div>
            {showItems && <ItemList item = {card.itemCards}/>} 
            </div>
        </div>
        {/* accordion body*/}
       
    </div>
}


export default RestaurantCategory;