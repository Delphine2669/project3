import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./SignUp.scss";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Login");
  };

  return (
    <div className="signup-box">
      <Header />
      <div className="signup_container">
        <form className="signup" onSubmit={handleSubmit}>
          <h2 className="title">Create your account</h2>
          <div className="signup-field">
            <input
              type="text"
              className="signup-input"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              type="email"
              className="signup-input"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              type="password"
              className="signup-input"
              value={confirmPassword}
              placeholder="Password confirmation"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <NavLink to="/Login" className="subscribe">
            Sign In
          </NavLink>
          <button type="submit" className="button login-signup">
            <div className="button-text">Sign Up</div>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
