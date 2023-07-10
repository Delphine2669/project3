import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import "../../components/Footer.scss";
import photoList from "../../components/PhotoList";
import VideoCarousel from "../../components/Caroussel/VideoCarousel";
import Caroussel from "../../components/Caroussel/Caroussel";
import CarousselDynamic from "../../components/Caroussel/CarousselDynamic";
import HeroSlider from "../../components/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <Header />
      </div>
      <div className="content">
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
