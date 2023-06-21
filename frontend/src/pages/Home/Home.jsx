import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Video from "../../components/Video";
import Caroussel from "../../components/Caroussel/Caroussel";
import CarousselDynamic from "../../components/Caroussel/CarousselDynamic";

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
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
        <Caroussel photoList={photoList} />
        <CarousselDynamic />
        <Video />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
