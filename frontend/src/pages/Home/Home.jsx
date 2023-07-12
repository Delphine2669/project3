import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import "../../components/Footer.scss";
import photoList from "../../components/PhotoList";
import VideoCarousel from "../../components/Caroussel/VideoCarousel";
import Caroussel from "../../components/Caroussel/Caroussel";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Grid from "../../components/Grid";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <Header />
      </div>
      <div className="content">
        <Caroussel photoList={photoList} />
        <HeroSlider photoList={photoList} />
        <VideoCarousel />
        <Grid />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
