import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.scss";
import Navbar from "../NavBar/Navbar";
import logo from "../../assets/logo.webp";
// import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  // const { user } = useAuth();

  const hiddenHeaderPages = [
    "/addvideos",
    "/addphotos",
    "/deletevideos",
    "/deletephotos",
    "/editvideos",
    "/editviewer",
    "/login",
    "/SignUp",
  ];

  const isHiddenPage = hiddenHeaderPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 0;
      setIsHidden(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isHiddenPage) {
    return (
      <header className={isHidden ? "hidden" : ""}>
        <NavLink to="/">
          <img className="logo" src={logo} width="35dvw" alt="Logo TSN Game" />
        </NavLink>
      </header>
    );
  }

  return (
    <header className={isHidden ? "hidden" : ""}>
      <Navbar />
    </header>
  );
}

export default Header;
