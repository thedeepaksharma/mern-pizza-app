import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/apiCalls";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login(dispatch, { username, password });
    addProduct(dispatch, { title, image, price, amount });
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>
              <label htmlFor="title">Title</label>
            </th>
            <td>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="image">Image Url</label>
            </th>
            <td>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="price">Price</label>
            </th>
            <td>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="amount">Amount</label>
            </th>
            <td>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <button
                type="submit"
                className="submit-btn"
                disabled={title && image && price && amount ? false : true}
              >
                add product
              </button>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default AddProduct;
