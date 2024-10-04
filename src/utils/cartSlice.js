import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[] 
    },
    reducers:{

        addItem:(state,action)=>{
            //thru action we recieve the payload and we update the state of the cart
            //mutating the state here
            console.log(state);
            console.log(action);
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
                //logic for removing item based on item index
        },
        clearCart:(state,action)=>{
            //state.items = []; ->this will not work

            state.items.length =0;
        }

    }
})


export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

//name of slice,
//initial state of the slice // keepings items here 
//reducer functions corresponding to each action which when dispatched will modify the slice

//our reducer function gets state and action 
//state of the slice and the action 
