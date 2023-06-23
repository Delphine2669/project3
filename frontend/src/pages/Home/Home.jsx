import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";
import "../../components/Footer.scss";

export default function Home() {
  const photo1 = "/video1.png";
  const photo2 = "/video2.png";
  const photoList = [
    {
      id: 1,
      src: photo1,
      alt: "screen video 1",
      description: "RPG",
    },
    {
      id: 2,
      src: photo2,
      alt: "screen video 2",
      description: "FPS",
    },
  ];
  console.info(photoList);

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
