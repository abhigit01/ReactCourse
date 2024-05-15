import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToProduct(state, action) {
      state.push(...action.payload);
    },
    removeFromProduct(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToProduct, removeFromProduct } = productSlice.actions;
export default productSlice.reducer;
