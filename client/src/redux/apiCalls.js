import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../features/user/userSlice";
import {
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "../features/cart/productSlice";
import { adminRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await adminRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    res.data && window.location.replace("/");
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const addProduct = async (dispatch, user) => {
  dispatch(addProductStart());
  try {
    const res = await adminRequest.post("/product", user);
    dispatch(addProductSuccess(res.data));
    res.data && window.location.replace("/");
  } catch (err) {
    dispatch(addProductFailure());
  }
};
