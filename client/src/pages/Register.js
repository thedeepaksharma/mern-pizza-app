import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        username,
        email,
        password,
      });
      res.data && window.location.replace("/");
    } catch (err) {}
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>
              <label htmlFor="name">Name</label>
            </th>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="username">Username</label>
            </th>
            <td>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="email">Email</label>
            </th>
            <td>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="password">Password</label>
            </th>
            <td>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <button
                type="submit"
                className="submit-btn"
                disabled={name && username && email && password ? false : true}
              >
                register
              </button>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <p>Already have an account?</p>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <Link to="/login" className="login-link">
                login
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default Register;
