import React from "react";
import PropTypes from "prop-types";
import "./Caroussel.scss";

function Card({ imageSrc, alt, title }) {
  return (
    <div className="photocard">
      <img src={imageSrc} alt={alt} className="photocard-image" height="50px" />
      <div className="photocard-content">
        <h2 className="photocard-title">{title}</h2>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
