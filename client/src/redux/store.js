import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/cart/productSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
