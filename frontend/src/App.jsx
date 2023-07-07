import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Caroussel from "./components/Caroussel/Caroussel";
import Video from "./components/Video";
import ImageGallery from "./components/ImageGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/videos" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/videos",
        index: true,
        element: <MyVideos />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function MyVideos() {
  const photo1 = "/video1.png";
  const photo2 = "/video2.png";
  const photo3 = "/video3.png";
  const photo4 = "/video4.png";

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
  const caption3 = "/video3.vtt";
  const caption4 = "/video4.vtt";

  const video1 = "/videos/video1.mp4";
  const video2 = "/videos/video2.mp4";
  const video3 = "/videos/video3.mp4";
  const video4 = "/videos/video4.mp4";

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
    <>
      <Caroussel photoList={photoList} />
      <Video videoList={videoList} />
      <Video videoList={videoList} />
      <Video videoList={videoList} />
      <Video videoList={videoList} />
      <Video videoList={videoList} />
      <Video videoList={videoList} />
    </>
  );
}
