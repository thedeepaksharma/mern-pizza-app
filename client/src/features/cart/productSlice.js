import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
  data: data,
  cartItems: [],
  amount: 0,
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemId = action.payload;
      const newProduct = data.find((item) => item.id === itemId);
      state.cartItems.push(newProduct);
    },
  },
});
export const { addTocart } = productSlice.actions;
export default productSlice.reducer;
