import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/productSlice";

const Cart = (item) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-items">
      <div className="cart-row">
        <img src={item.img} alt={item.title} />
        <div className="remove-column">
          <h3>{item.title}</h3>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            remove
          </button>
        </div>
        <h3 className="item-price">${item.price}</h3>
        <div className="chevron-btn">
          <button
            className="amount-btn"
            onClick={() => dispatch(increase(item.id))}
          >
            <ChevronUp />
          </button>
          <h3 className="amount">{item.amount}</h3>
          <button
            className="amount-btn"
            onClick={() => {
              if (item.amount === 1) {
                dispatch(removeItem(item.id));
                return;
              }
              dispatch(decrease(item.id));
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Cart;
