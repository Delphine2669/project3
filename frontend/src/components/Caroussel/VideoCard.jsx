import React, { useState } from "react";
import PropTypes from "prop-types";
import "./VideoCard.scss";

function VideoCard({ videoSrc, caption, title }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`video-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video className="video" controls={isHovered} width="100%" src={videoSrc}>
        <track default kind="captions" srcLang="fr" src={caption} />
        Sorry, your browser doesn't support videos.
      </video>
      <p className="card-title">{title}</p>
    </div>
  );
}

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoCard;
