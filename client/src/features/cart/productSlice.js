import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
  data: data,
  cartItems: [],
  amount: 1,
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

    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount - 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const {
  addTocart,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = productSlice.actions;
export default productSlice.reducer;
