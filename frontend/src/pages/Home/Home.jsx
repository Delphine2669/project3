import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Caroussel from "../../components/Caroussel/Caroussel";
import CarousselDynamic from "../../components/Caroussel/CarousselDynamic";
import Video from "../../components/Video";

export default function Home() {
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
  const caption1 = "/video1.vtt";
  const caption2 = "/video2.vtt";
  const caption3 = "/video1.vtt";
  const caption4 = "/video2.vtt";
  const video1 = "/assets/Cyberpucnk_2077_court_circuit.mp4";
  const video2 = "/assets/Cyberpucnk_2077_Panam_in_trouble.mp4";
  const video3 = "/assets/Cyberpucnk_2077_court_circuit.mp4";
  const video4 = "/assets/Cyberpucnk_2077_Panam_in_trouble.mp4";

  const videoList = [
    {
      id: 1,
      src: video1,
      caption: caption1,
      title: "cyberpucnk court circuit",
      description: "RPG",
    },
    {
      id: 2,
      src: video2,
      caption: caption2,
      title: "cyberpucnk panam in trouble",
      description: "FPS",
    },
    {
      id: 3,
      src: video3,
      caption: caption3,
      title: "cyberpucnk court circuit",
      description: "RPG",
    },
    {
      id: 4,
      src: video4,
      caption: caption4,
      title: "cyberpucnk panam in trouble",
      description: "FPS",
    },
  ];

  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
        <Caroussel photoList={photoList} />
        <CarousselDynamic />
        <Video videoList={videoList} />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
