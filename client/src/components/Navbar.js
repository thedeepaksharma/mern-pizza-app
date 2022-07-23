import React from "react";
import { CartIcon } from "../icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.product);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-items-list">
          <Link to="/" className="nav-link">
            pizza hub
          </Link>
          <Link to="/products" className="nav-link">
            products
          </Link>
          <Link to="/login" className="nav-link">
            login
          </Link>
        </div>
        <div className="nav-container">
          <Link to="/cart" className="cart-icon">
            <CartIcon />
          </Link>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
