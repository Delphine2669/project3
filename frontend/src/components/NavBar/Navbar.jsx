import "./Navbar.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../assets/TSN_logo.png";

function NavBar() {
  return (
    <div className="nav-container">
      <img className="logo" src={logo} alt="Logo TSN Game" />
      <div className="link">
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;
