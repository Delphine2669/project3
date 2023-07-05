import React, { useState } from "react";
import "./Login.css";
import { useNavigate, NavLink } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="login_container">
      <div className="screen">
        <div className="screen-content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login-field">
              <i className="login-icon fas fa-user" />
              <input
                type="text"
                className="login-input"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-field">
              <i className="login-icon fas fa-lock" />
              <input
                type="password"
                className="login-input"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="new-user">
              New user?
              <NavLink to="/SignUp" className="subscribe">
                Create an Account
              </NavLink>
            </p>
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
    </div>
  );
}
