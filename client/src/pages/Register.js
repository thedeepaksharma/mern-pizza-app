import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <form className="form">
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
                disabled={name && username && email && password ? false : true}
                type="submit"
                className="submit-btn"
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
