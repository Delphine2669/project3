import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import Caroussel from "../../components/Caroussel/Caroussel";
import VideoCarousel from "../../components/Caroussel/VideoCarousel";
import Footer from "../../components/Footer";
import "../../components/Footer.scss";
import videoList from "../../components/VideoList";
import photoList from "../../components/PhotoList";
import videoList2 from "../../components/DynamicVideoList";
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
        <CarousselDynamic videoList2={videoList2} />
        <VideoCarousel videoList={videoList} />
      </div>
      <br />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
