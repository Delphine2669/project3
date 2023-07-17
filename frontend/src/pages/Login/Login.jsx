import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Login.scss";

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
      <div>
        {" "}
        <div className="login_container">
          <form className="login" onSubmit={handleSubmit}>
            <h2 className="title">LOGIN</h2>
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
      <Footer />
    </>
  );
}
