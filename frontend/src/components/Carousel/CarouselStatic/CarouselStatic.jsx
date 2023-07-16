import React, { useState, useEffect } from "react";
import ApiCalls from "../../../utils";
import CarouselCard from "../CarouselCard/CarousselCard";
import "./CarouselStatic.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

function CarouselStatic() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const fetchedVideos = await ApiCalls.videoCall();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="caroussel-static">
      {videos.map((video) => (
        <div key={video.id}>
          <CarouselCard
            videoSrc={`${import.meta.env.VITE_BACKEND_URL}/assets${
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

export default CarouselStatic;
