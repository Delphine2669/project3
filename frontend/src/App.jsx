import NavBar from "./pages/Home/Navbar";
import "./App.css";
import Video from "./Components/Video";
import Caroussel from "./Components/Caroussel/Caroussel";

function App() {
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
        composant rattacher au video et carsoussel statique/dynamique
        <Caroussel photoList={photoList} />
        <br />
        <Video />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}

export default App;
