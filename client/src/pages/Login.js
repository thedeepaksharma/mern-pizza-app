import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <table>
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
            <td></td>
            <td>
              <button
                disabled={username && password ? false : true}
                type="submit"
                className="submit-btn"
              >
                login
              </button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <p>Do not have an account?</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to="/register" className="register-link">
                register
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default Login;
