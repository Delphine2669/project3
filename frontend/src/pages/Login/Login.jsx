import React, { useState } from "react";
import "./Login.css";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../assets/TSN_logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {" "}
      <img src={logo} alt="TSN logo" className="login-logo" />
      <div className="login_container">
        <form className="login" onSubmit={handleSubmit}>
          <h3 className="title">LOGIN</h3>
          <div className="login-field">
            <input
              type="text"
              className="login-input"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-field">
            <input
              type="password"
              className="login-input"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="new-user">New user ?</p>
          <NavLink to="/SignUp" className="subscribe">
            Create an Account
          </NavLink>
          <button
            type="submit"
            className="button login-submit"
            data-hover="Let's Go!!"
          >
            <div className="button-text">sign in</div>
          </button>
        </form>
      </div>
    </div>
  );
}
