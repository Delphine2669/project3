import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";
// import Searchbar from "../SearchBar/SearchBar";
import settings from "../../assets/settings.svg";

function NavBar() {
  const { isAdmin } = useAuth();
  const { user } = useAuth();
  return (
    <div className="nav-container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Logo TSN Game" />
      </NavLink>

      {isAdmin && (
        <div>
          <NavLink className="admin-dash-link" to="/adminpage">
            <img
              className="settings"
              src={settings}
              alt="cog for dashboard access"
            />
          </NavLink>
        </div>
      )}
      <div className="link">
        {/* <Searchbar /> */}
        {user ? (
          // <div className="username-home-div">
          <span className="username-home">{user.username}</span>
        ) : (
          // </div>
          <span className="unlogged"> </span>
        )}
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;
