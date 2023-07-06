import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import Caroussel from "../../components/Caroussel/Caroussel";
import VideoCarousel from "../../components/Caroussel/VideoCarousel";
import Footer from "../../components/Footer";
import "../../components/Footer.scss";
import photoList from "../../components/PhotoList";
import CarousselDynamic from "../../components/Caroussel/CarousselDynamic";
import HeroSlider from "../../components/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
        <Caroussel photoList={photoList} />
        <br />
        <HeroSlider photoList={photoList} />
        <br />
        <CarousselDynamic />
        <VideoCarousel />
      </div>
      <br />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
