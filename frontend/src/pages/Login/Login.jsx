import React, { useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { authFetch } from "../../utils";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Login.scss";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { setToken, setIsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authFetch(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5001"}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();

        if (data && data.token && data.viewer) {
          const { token, viewer } = data;
          localStorage.setItem("token", token);
          setToken(token);
          setIsAdmin(viewer.is_admin);
          alert("Login successful");
          navigate("/");
        } else {
          throw new Error("Invalid response data");
        }
      } else {
        alert("Error: Login failed");
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-box">
      <Header />
      <div>
        <div className="login_container">
          <form className="login" onSubmit={handleSubmit}>
            <h2 className="title">LOGIN</h2>
            <div className="login-field">
              <input
                className="login-input"
                type="text"
                id="username"
                ref={usernameRef}
                placeholder="Username"
              />
            </div>
            <div className="login-field">
              <input
                className="login-input"
                type="password"
                id="password"
                ref={passwordRef}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="button login-submit">
              <div className="button-text">Sign In</div>
            </button>
            <p className="new-user">New user?</p>
            <NavLink to="/SignUp" className="subscribe">
              Create an Account
            </NavLink>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
