import NavBar from "./pages/Home/Navbar";
import "./App.css";
import Card from "./Components/Caroussel/Card";
import Videos from "./Components/Video";

export default function App() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        composant rattacher au video et carsoussel statique/dynamique
        <Card />
        <Videos />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
