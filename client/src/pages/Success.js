import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminRequest } from "../requestMethods";

const Success = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { amount, total, cartItems } = useSelector((state) => state.product);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await adminRequest.post("/order", {
          userId: currentUser._id,
          products: cartItems.map((item) => ({
            productId: item._id,
            amount: item.amount,
          })),
          total: total,
        });
      } catch {}
    };
    cartItems && createOrder();
  }, [total, amount, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Order has been created successfully.
      <Link to="/" style={{ padding: 10, marginTop: 20 }}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default Success;
