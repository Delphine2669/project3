import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./HeroSlider.scss";

function HeroSlider({ photoList }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === photoList.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? photoList.length - 1 : prevSlide - 1
    );
  };
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      goToNextSlide();
    } else if (event.key === "ArrowLeft") {
      goToPreviousSlide();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <p className="hero-slider-categorie">Summer Z-Event 2023</p>
      <div className="hero-slider">
        {photoList.map((photo, index) => (
          <div
            key={photo.id}
            className={`hero-slider-slide ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => handleSlideClick(index)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex="0"
          >
            <img src={photo.src} alt={photo.alt} />
            <div className="hero-slider-content" />
          </div>
        ))}
      </div>
    </>
  );
}
HeroSlider.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroSlider;
