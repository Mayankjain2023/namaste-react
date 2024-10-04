import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    console.log("CartItems",cartItems);
    return (
    
            <div className="text-center m-4 p-4">
                <h1 className="font-bold text-gray-400 text-2xl">Cart Items</h1>
             
                <div className="w-6/12 m-auto ">
                <button className="rounded-md m-2 p-2 bg-black text-white h-12" onClick={handleClearCart}>
                    Clear Cart 
                    {/* <i className="fa fa-trash m-2 p-2"></i> */}
                </button>
                    {cartItems.length>0? <ItemList item={cartItems}></ItemList> : "No items in cart" }
                    
                </div>
            </div>
    )
}


export default Cart;