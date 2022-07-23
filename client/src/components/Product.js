import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/cart/productSlice";

const Product = (item) => {
  const { id, img, title, price } = item;
  const dispatch = useDispatch();
  return (
    <article key={id}>
      <div className="special-product">
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="addTocart-btn"
          onClick={() => dispatch(addTocart(id))}
        >
          add to cart
        </button>
      </div>
    </article>
  );
};

export default Product;
