import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
})


export default appStore;





//configureStore for configuring the store for our application

//main store has its own main reducer to modify the store
//store has many slice which also have their own reducers
//so the main reducer has reducers from the slices