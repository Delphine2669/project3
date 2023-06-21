import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import "../../components/Footer.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <br />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
