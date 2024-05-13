import { configureStore } from "@reduxjs/toolkit";
import productReducer from './products/productSlice';
import wishlistReducer from "./products/wishlistSlice";

const store = configureStore({
  reducer:{
    product: productReducer,
    wishlist: wishlistReducer,

  }
})

export default store;