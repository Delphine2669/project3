import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./SignUp.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const viewer = {
      username,
      hashedPassword: password,
      email,
    };

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5001"
        }/viewers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(viewer),
        }
      );
      if (res.ok) {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        alert("Account created successfully");
        navigate("/Login");
      } else {
        alert("Error. Creation of account failed ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-box">
      <Header />
      <div className="signup-container">
        <form className="signup" onSubmit={handleSubmit}>
          <h2 className="title">Create your account</h2>
          <div className="signup-field">
            <input
              className="signup-input"
              type="text"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              className="signup-input"
              type="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              className="signup-input"
              type="password"
              value={password}
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              className="signup-input"
              type="password"
              value={confirmPassword}
              required
              placeholder="Password confirmation"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="button signup-submit"
            type="submit"
            data-hover="Let's Go!"
          >
            <div className="button-text">Sign Up</div>
          </button>
          <NavLink to="/login" className="login">
            Sign In
          </NavLink>
        </form>
      </div>
      <Footer />
    </div>
  );
}
