import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.splice(state.findIndex((arrow)=>arrow.id===action.payload),1);
    },
  },
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
