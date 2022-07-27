import React, { useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [orders, setOrders] = useState();
  const [users, setUsers] = useState();
  const showOrders = async (e) => {
    try {
      const res = await axios.get("/api/order");
      setOrders(res.data);
      console.log(orders);
    } catch (error) {
      console.log(error);
    }
  };

  const showUsers = async (e) => {
    try {
      const res = await axios.get("/api/auth");
      setUsers(res.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="dashboard">
      <div className="orders-btn">
        <button className="submit-btn" onClick={() => showUsers()}>
          show all users
        </button>
        <button className="submit-btn" onClick={() => showOrders()}>
          show all orders
        </button>
      </div>

      {users && (
        <div className="orders">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Id</th>
              <th>Email</th>
            </tr>
          </thead>
          {users.map((item) => {
            return (
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
            );
          })}
        </div>
      )}
      {orders && (
        <div className="orders">
          <thead>
            <tr>
              <th>Users Id</th>
              <th>Total</th>
              <th>Products Id</th>
              <th>Qty</th>
            </tr>
          </thead>
          {orders.map((item) => {
            return (
              <tbody>
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.total}</td>
                  {item.products.map((p) => {
                    return (
                      <div>
                        <td>{p.productId}</td>
                        <td>{p.quantity}</td>
                      </div>
                    );
                  })}
                </tr>
              </tbody>
            );
          })}
        </div>
      )}
    </section>
  );
};
