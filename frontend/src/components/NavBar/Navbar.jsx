import "./Navbar.scss";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function NavBar() {
  return (
    <div className="container">
      <img
        className="logo"
        src="./src/assets/Logo Tsn.png"
        alt="Logo TSN Game"
      />

      <div className="link">
        <ProfileMenu />
      </div>
    </div>
  );
}

export default NavBar;
