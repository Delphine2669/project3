import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

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
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-field">
              <i className="login-icon fas fa-lock" />
              <input
                type="password"
                className="login-input"
                value={password}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="new-user">
              New user?
              <a className="subscribe" href="/sign-up">
                Creat an Account
              </a>
            </p>
            <button
              type="submit"
              className="button login-submit"
              data-hover="Let's Go!!"
            >
              <div className="button-text">Se connecter</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// function Login() {
//   const [username, setUsername] = useState("");
//   const [passWord, setPassWord] = useState("");

//   return (
//     <div className="container">
//       <div className="screen">
//         <div className="screen-content">
//           <form className="login">
//             <div className="login-field">
//               <i className="login-icon fas fa-user" />
//               <input
//                 type="text"
//                 className="login-input"
//                 value={username}
//                 placeholder="Nom d'utilisateur"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="login-field">
//               <i className="login-icon fas fa-lock" />
//               <input
//                 type="password"
//                 className="login-input"
//                 value={passWord}
//                 placeholder="Mot de passe"
//                 onChange={(e) => setPassWord(e.target.value)}
//               />
//             </div>
//             <button type="button" className="button login-submit">
//               <span className="button-text">Se connecter</span>
//               <i className="button-icon fas fa-chevron-right" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
