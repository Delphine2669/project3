import NavBar from "./pages/Home/Navbar";
import "./App.css";
import Videos from "./Components/Video";
import Carousel from "./Components/Caroussel/Caroussel";
import photo1 from "../public/video1.png";
import photo2 from "../public/video2.png";

function App() {
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
        composant rattacher au video et carsoussel statique/dynamique
        <Carousel photoList={photoList} />
        <br />
        <Videos />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}

export default App;
