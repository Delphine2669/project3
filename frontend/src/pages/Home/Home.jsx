import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Caroussel from "../../components/Caroussel/Caroussel";
import Video from "../../components/Video";

export default function Home() {
  const photo1 = "/video1.png";
  const photo2 = "/video2.png";
  const photo3 = "/video3.png";
  const photo4 = "/video1.png";
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
    {
      id: 3,
      src: photo3,
      alt: "screen video 3",
      description: "FPS",
    },
    {
      id: 4,
      src: photo4,
      alt: "screen video 4",
      description: "RPG",
    },
  ];
  const caption1 = "/video1.vtt";
  const caption2 = "/video2.vtt";
  const caption3 = "/video1.vtt";
  const caption4 = "/video1.vtt";

  const video1 = "/videos/Cyberpucnk_2077_court_circuit.mp4";
  const video2 = "/videos/Cyberpucnk_2077_Panam_in_trouble.mp4";
  const video3 = "/videos/CoD_Modern_Warfare.mp4";
  const video4 = "/videos/Cyberpucnk_2077_court_circuit.mp4";

  const videoList = [
    {
      id: 1,
      videoSrc: video1,
      caption: caption1,
      title: "cyberpucnk court circuit",
      description: "RPG",
    },
    {
      id: 2,
      videoSrc: video2,
      caption: caption2,
      title: "cyberpucnk panam in trouble",
      description: "FPS",
    },
    {
      id: 3,
      videoSrc: video3,
      caption: caption3,
      title: "call of Duty modern warfare",
      description: "RPG",
    },
    {
      id: 4,
      videoSrc: video4,
      caption: caption4,
      title: "cyberpucnk court circuit",
      description: "RPG",
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
        <Video videoList={videoList} />
        <Video videoList={videoList} />
        <Video videoList={videoList} />
      </div>
      <br />
      <div className="Footer">Footer</div>
    </div>
  );
}
