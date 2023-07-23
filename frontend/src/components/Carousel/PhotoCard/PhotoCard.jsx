import React from "react";
import PropTypes from "prop-types";
import "./PhotoCard.scss";

function Card({ imageSrc, alt }) {
  return (
    <div className="photocard">
      <img src={imageSrc} alt={alt} className="photocard-image" />
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Card;
