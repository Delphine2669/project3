import Header from "../../components/Header/Header";
import photoList from "../../components/PhotoList";
import DysneyCat from "../../components/Carousel/DysneyLike/DisneyCat";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import CarouselDynamic from "../../components/Carousel/CarouselDynamic/Caroussel";
import VideoCarousel from "../../components/Carousel/VideoCarousel";
import Grid from "../../components/Grid/Grid";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <Header />
      </div>
      <div className="content">
        <CarouselDynamic photoList={photoList} />
        <HeroSlider photoList={photoList} />
        <DysneyCat />
        <VideoCarousel />
        <Grid />
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
