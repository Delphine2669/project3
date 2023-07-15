import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className="nav-container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Logo TSN Game" />
      </NavLink>
      <div className="link">
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;
