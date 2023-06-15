import NavBar from "./components/Navbar/Navbar";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        composant rattacher au video et carsoussel statique/dynamique
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
