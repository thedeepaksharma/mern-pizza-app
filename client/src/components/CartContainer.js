import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { clearCart } from "../features/cart/productSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart-container">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
