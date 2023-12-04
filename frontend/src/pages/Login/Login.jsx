import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { authFetch } from "../../utilities/utils";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { saveToken } from "../../utilities/localStorage";
import "./Login.scss";
import "react-toastify/dist/ReactToastify.css";

toast.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  position: "top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "800",
  hideDuration: "500",
  timeOut: "3000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
  escapeHtml: true,
};

export default function Login() {
  const { setToken, setIsAdmin, setUser } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
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
          saveToken(token);
          setToken(token);
          const isAdmin = !!viewer.isAdmin;
          setIsAdmin(isAdmin);
          setUser(viewer);
          toast.success("Successfully logged in");
          navigate("/");
        } else {
          throw new Error("Invalid response data");
        }
      } else {
        toast.error("Failed to login, check your credentials");
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-box">
      <Header />
      <div className="login-container">
        <form className="login" onSubmit={handleSubmit}>
          <h2 className="login-title title">LOGIN</h2>
          <div className="login-field">
            <input
              className="login-input"
              type="text"
              id="username"
              ref={usernameRef}
              required
              placeholder="Username"
            />
          </div>
          <div className="login-field">
            <input
              className="login-input"
              type={passwordVisible ? "text" : "password"}
              id="password"
              ref={passwordRef}
              required
              placeholder="Password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={handleTogglePasswordVisibility}
            >
              {passwordVisible ? (
                <img
                  src="/assets/hidePassword.png"
                  alt="Hide Password"
                  height="20"
                  width="20"
                />
              ) : (
                <img
                  src="/assets/showPassword.png"
                  alt="Show Password"
                  height="20"
                  width="20"
                />
              )}
            </button>
          </div>
          <button type="submit" className="button login-submit">
            <div className="button-text">Sign In</div>
          </button>
          <p className="new-user">New user ?</p>
          <NavLink to="/SignUp" className="subscribe">
            Create an Account
          </NavLink>
        </form>
      </div>
      <Footer />
    </div>
  );
}
