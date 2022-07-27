import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./components/Products";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getProducts } from "./features/cart/productSlice";
import Home from "./components/Home";
import AddProduct from "./pages/AddProduct";
import Success from "./pages/Success";
import { Dashboard } from "./components/Dashboard";

function App() {
  const { cartItems } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const user = useSelector((state) => state.user.currentUser);
  const isAdmin = user?.isAdmin;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<CartContainer />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/dashboard" element={isAdmin && <Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
