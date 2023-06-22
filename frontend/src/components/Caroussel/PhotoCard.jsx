import React from "react";
import PropTypes from "prop-types";
import "./Caroussel.scss";

function Card({ imageSrc, alt, title, description }) {
  return (
    <div className="photocard">
      <img src={imageSrc} alt={alt} className="photocard-image" />
      <div className="photocard-content">
        <h2 className="photocard-title">{title}</h2>
        {/*<p className="photocard-description">{description}</p>*/}
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
