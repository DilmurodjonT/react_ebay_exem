import "./Register.css";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  function registerUser(e) {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/users/", userdata)
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  }
  return (
    <div className="register">
      <div className="register__forms">
        <div className="register__links">
          <a href="/">Log in via Facebook</a>
          <a href="/">Access through Apple</a>
          <a href="/">Sign in with Google</a>
        </div>
        <div className="register__or__section">
          <div className="register__stick"></div>
          <h3>Register</h3>
          <div className="register__stick"></div>
        </div>
        <form className="register__form" onSubmit={registerUser}>
          <input
            required
            type="text"
            placeholder="your name"
            value={userdata.name}
            onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="your email"
            value={userdata.email}
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
          />
          <input
            required
            minLength={8}
            type="password"
            placeholder="your password"
            value={userdata.password}
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
          />
          <input
            required
            type="url"
            placeholder="your avatar"
            value={userdata.avatar}
            onChange={(e) =>
              setUserdata({ ...userdata, avatar: e.target.value })
            }
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
