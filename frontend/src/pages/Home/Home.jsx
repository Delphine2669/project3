import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import photoList from "../../components/PhotoList";
import VideoCarousel from "../../components/Carousel/VideoCarousel";
// import HeroSlider from "../../components/HeroSlider/HeroSlider";
import DysneyCat from "../../components/Carousel/DysneyLike/DisneyCat";
import CarouselDynamic from "../../components/Carousel/CarouselDynamic/Caroussel";
// import CarouselStatic from "../../components/Carousel/CarouselStatic/CarouselStatic";

export default function Home() {
  return (
    <div className="main-container">
      <div className="Header">
        <Header />
      </div>
      <div className="content">
        <CarouselDynamic photoList={photoList} />
        <DysneyCat />
        {/* <HeroSlider photoList={photoList} /> */}
        {/* <CarouselStatic /> */}
        <VideoCarousel />
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
