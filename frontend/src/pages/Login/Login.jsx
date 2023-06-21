import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                value={username}
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                value={passWord}
                placeholder="Mot de passe"
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <button type="button" className="button login__submit">
              <span className="button__text">Se connecter</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
