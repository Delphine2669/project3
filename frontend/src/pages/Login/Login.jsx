import React, { useState } from "react";
import "./Login.scss";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="login_container">
        <form className="login" onSubmit={handleSubmit}>
          <h2>Login to your account</h2>
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
          <p>
            <span className="new-user">New user ?</span>
            <br />
            <NavLink to="/SignUp" className="subscribe">
              Create an Account
            </NavLink>
          </p>
          <button type="submit" className="button login-submit">
            <div className="button-text">sign in</div>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
