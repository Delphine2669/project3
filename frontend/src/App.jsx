import NavBar from "./pages/Home/Navbar";
import Video from "./components/Video";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        composant rattacher au video et carsoussel statique/dynamique
        <Video />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
