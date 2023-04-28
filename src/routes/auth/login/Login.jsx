import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function loginUser(e) {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="login">
      <div className="login__forms">
        <div className="register__or__section">
          <div className="register__stick"></div>
          <h3>Login</h3>
          <div className="register__stick"></div>
        </div>
        <form onSubmit={loginUser} className="register__form">
          <input
            required
            type="email"
            placeholder="email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
