import { configureStore } from "@reduxjs/toolkit";
import  CartSlice, {cartMiddleware } from "./features/CartSlice";


export const  store = configureStore({
    reducer:{
        cart:CartSlice ,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cartMiddleware),
    
});