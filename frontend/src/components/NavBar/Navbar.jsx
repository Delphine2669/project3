import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../assets/logo.png";
import Searchbar from "../SearchBar/SearchBar";

function NavBar() {
  const { cachedToken, isAdmin } = useAuth();
  return (
    <div className="nav-container">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Logo TSN Game" />
      </NavLink>
      {cachedToken && isAdmin && (
        <div className="admin-dash-link">
          <NavLink to={isAdmin ? "/adminpage" : "/"}>Admin Dashboard</NavLink>
        </div>
      )}
      <div className="link">
        <Searchbar />
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;
