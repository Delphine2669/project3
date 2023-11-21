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
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
        Sorry, your browser doesn't support videos.
      </iframe>
      <video className="video" controls={isHovered} width="100%" src={videoSrc}>
        <track default kind="captions" srcLang="fr" src={caption} />
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
