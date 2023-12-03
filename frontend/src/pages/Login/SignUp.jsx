import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

toast.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "200",
  hideDuration: "500",
  timeOut: "3000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
  escapeHtml: true,
};

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const viewer = {
      username,
      hashedPassword: password,
      email,
    };
    if (password !== confirmPassword) {
      toast.info("Password and password confirmation don't match.");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.info(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long."
      );
      return;
    }

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
        toast.success("Account created successfully");
        navigate("/Login");
      } else if (res.status === 403) {
        toast.error("Account already exists");
      } else {
        toast.error("Account creation failed");
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
          <h3 className="signup-title title">Create your account</h3>
          <div className="signup-field">
            <input
              type="text"
              className="signup-input"
              id="username"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              type="email"
              className="signup-input"
              id="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              type="password"
              id="password"
              className="signup-input"
              value={password}
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-field">
            <input
              type="password"
              id="password"
              className="signup-input"
              value={confirmPassword}
              required
              placeholder="Password confirmation"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="button signup-submit"
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
