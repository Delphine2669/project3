import React, { useState } from "react";
import Subscribe from "../Subscribe/Subscribe";

function login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="name">
      <div className="bloc">
        <input
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Mot de Passe"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="subscribe">
        <Subscribe />
      </div>
    </div>
  );
}

export default login;
