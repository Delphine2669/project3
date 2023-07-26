import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../assets/logo.png";
import useAuth from "../../contexts/AuthContext";
// import Searchbar from "../SearchBar/SearchBar";

function NavBar() {
  const { isAdmin } = useAuth();
  return (
    <div className="nav-container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Logo TSN Game" />
      </NavLink>
      {isAdmin && (
        <div>
          <NavLink className="admin-dash-link" to="/adminpage">
            Admin Dashboard
          </NavLink>
        </div>
      )}
      <div className="link">
        {/* <Searchbar /> */}
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;
