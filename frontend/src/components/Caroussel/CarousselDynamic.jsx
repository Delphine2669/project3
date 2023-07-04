import React from "react";
import PropTypes from "prop-types";

import CarouselDCard from "./CarousselDCard";
import "./CarousselDynamic.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";

function CarousselDynamic({ videoList2 }) {
  return (
    <div className="caroussel-dynamic">
      {videoList2.map((video) => (
        <div key={video.id}>
          <CarouselDCard
            videoSrc={video.videoSrc}
            caption={video.caption}
            title={video.title}
            description={video.description}
          />
        </div>
      ))}
    </div>
  );
}
CarousselDynamic.propTypes = {
  videoList2: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      videoSrc: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CarousselDynamic;
