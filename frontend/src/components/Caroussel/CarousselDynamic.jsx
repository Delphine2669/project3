import React, { useState, useEffect } from "react";
import videoCall from "../../utils";
import CarouselDCard from "./CarousselDCard";
import "./CarousselDynamic.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

function CarousselDynamic() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const fetchedVideos = await videoCall();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="caroussel-dynamic">
      {videos.map((video) => (
        <div key={video.id}>
          <CarouselDCard
            videoSrc={`${import.meta.env.VITE_BACKEND_URL}/assets/${
              video.videoSrc
            }`}
            caption={video.caption}
            title={video.title}
            description={video.description}
          />
        </div>
      ))}
    </div>
  );
}

export default CarousselDynamic;
