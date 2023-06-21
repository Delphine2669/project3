import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
