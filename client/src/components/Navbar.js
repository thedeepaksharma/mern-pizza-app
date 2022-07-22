import React from "react";
import { CartIcon } from "../icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-items-list">
          <Link to="/home" className="nav-link">
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
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">5</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
