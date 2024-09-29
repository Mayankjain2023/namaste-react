import { IMAGE_URL } from "../utils/constants"

const ItemList = (items)=>{
    // console.log("itme",items.item)
    // console.log("items",items.item[0].card.info)
    return(

        <div>
            {
                items.item.map((item)=>(
                    <div key={item?.card?.info?.id} className="m-2 p-2 rounded-sm border-gray-300 border-b-2 text-left flex">
                       
                        <div className="w-9/12">
                            <div className="text-left p-2">
                                <span className="p-2">
                                {item.card?.info?.name}
                                </span>
                                <span> - ₹
                                {(item.card?.info?.price / 100)? (item.card.info.price/100):(item.card.info.defaultPrice/100)}
                                </span>
                            </div>
                            <p className="text-xs">{item.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <div className="flex flex-col-reverse">
                            <img className="rounded-md" src={IMAGE_URL + item.card.info.imageId}></img>
                            <button className="p-2 bg-green-400 text-white shadow-lg absolute m-auto rounded-md">ADD +</button>
                        </div>
                           
                        </div>
                     
                    </div>
                ))
            }
        </div>
    )
}


export default ItemList