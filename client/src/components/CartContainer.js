import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { clearCart } from "../features/cart/productSlice";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { adminRequest } from "../requestMethods";

// const KEY = process.env.REACT_STRIPE;
const KEY =
  "pk_test_51Jk05iSHjFXv3zpm1x2vs0TEOQRZRIY3WLh8y6u9ShAqOQVyksGZcVmPIWhWm5WjSH8Ndbku7h33BLLHYfSviGtO00CFaMdFbb";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.product);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await adminRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 10,
        });
        console.log("res ", res);
      } catch {}
    };
    console.log(stripeToken);
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate]);

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
          return <Cart key={item._id} {...item} />;
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
        <StripeCheckout
          name="Pizza Hub"
          billingAddress
          shippingAddress
          amount={total.toFixed(2) * 100}
          token={onToken}
          stripeKey={KEY}
        >
          <button className="checkout-btn">check out</button>
        </StripeCheckout>
      </footer>
    </section>
  );
};

export default CartContainer;
