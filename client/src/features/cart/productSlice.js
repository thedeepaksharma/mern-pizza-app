import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../data";
import axios from "axios";

const initialState = {
  data: data,
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/api/product");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemId = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemId >= 0) {
        state.cartItems[itemId].amount += 1;
      } else {
        const tempProduct = { ...action.payload, amount: 1 };
        state.cartItems.push(tempProduct);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
    },

    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item._id === itemId);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item._id === itemId);
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

    //Add Product
    addProductStart: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
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
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
