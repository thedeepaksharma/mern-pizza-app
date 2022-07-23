import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.product);
  return (
    <article className="cart-items">
      <div>
        {cartItems.map((item) => {
          return (
            <div className="cart-row">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <h3 className="item-price">${item.price}</h3>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Cart;
