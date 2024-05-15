import { configureStore } from "@reduxjs/toolkit";
import productReducer from './products/productSlice'
import cartReducer from './products/cartSlice'
import wishlistReducer from './products/wishlistSlice'


const store = configureStore({
  reducer:{
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer

  }
})

export default store;