import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const Products = () => {
  const { data } = useSelector((store) => store.product);
  return (
    <section>
      <div className="specials-title">
        <h3>Our Specials</h3>
      </div>
      <div className="special-items-container">
        {data.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Products;
