import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/Footer.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <Header />
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
