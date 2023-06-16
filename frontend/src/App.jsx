import NavBar from "./pages/Home/Navbar";
import "./App.css";
import CarousselDynamic from "./components/Caroussel/CarousselDynamic";

export default function App() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div>
        <CarousselDynamic />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
