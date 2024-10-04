import { useDispatch } from "react-redux"
import { IMAGE_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList = (items)=>{
    // console.log("itme",items.item)
    // console.log("items",items.item[0].card.info)

    //for dispatching the action we use useDispatch hook given by react-redux
    const dispatch = useDispatch()
    const handleAdd = (item)=>{
        console.log("item added",item)
        //dispatch the action add_item so the reducer will update the item state

        dispatch(addItem(item)) 

        //here whateve is passed in the addItem("apple") // apple goes in action.payload which is used in reducer
        //what happens is it makes { payload:"pizza"}  and pass it as 2nd argument to the reducer 
        //such that (state,action ) -> we use action.payload
    }

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
                            <button className="p-2 bg-green-400 text-white shadow-lg absolute m-auto rounded-md" onClick={()=>handleAdd(item)}>ADD +</button>
                        </div>
                           
                        </div>
                     
                    </div>
                ))
            }
        </div>
    )
}


export default ItemList