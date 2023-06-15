import React, { useState } from "react";
import "./Navbar.scss";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
    }
  };

  return (
    <div className="container">
      <img
        className="logo"
        src="./src/assets/Logo Tsn.png"
        alt="Logo TSN Game"
      />
      <div className="link">
        <div>Catégories</div>
        <div>Recherche</div>
        <button
          type="button"
          className="compte reset-button"
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
        >
          Connexion
          {dropdownOpen && (
            <div className="dropdown">
              <div className="dropdown-item">S'identifier</div>
              <div className="dropdown-item">Crée un compte</div>
              <div className="dropdown-item">Paramètres</div>
              <div className="dropdown-item">Aide</div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
