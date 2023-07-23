import Header from "../../components/Header/Header";
import photoList from "../../components/PhotoList";
import DysneyCat from "../../components/DisneyCat";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import CarouselDynamic from "../../components/Carousel/CarouselDynamic/CarouselDynamic";
import VideoCarousel from "../../components/Carousel/VideoCarousel";
import Grid from "../../components/Grid/Grid";
import Footer from "../../components/Footer/Footer";
import SliderTiles from "../../components/Carousel/DysneyLike/SliderTiles";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <Header />
      </div>
      <div className="content">
        <CarouselDynamic />
        <SliderTiles />
        <HeroSlider photoList={photoList} />
        <VideoCarousel />
        <DysneyCat />
        <Grid />
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
