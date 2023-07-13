import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import PhotoCard from "./PhotoCard";
import photoCall from "../../utils";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import "./Caroussel.scss";

function Caroussel() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const fetchedPhotos = await photoCall();
        setPictures(fetchedPhotos);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      }
    }
    fetchPhotos();
  }, []);
  return (
    <div className="carousel-photocard-container">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {pictures.map((photo) => (
          <div key={photo.id} className="carousel-photocard-body">
            <PhotoCard
              imageSrc={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                photo.videoSrc
              }`}
              title={photo.title}
              description={photo.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Caroussel;
