import React, { useState } from "react";
import "./SliderTiles.scss";

export default function SliderTiles() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSlideClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    if (selectedVideo === videoUrl) {
      setSelectedVideo(null);
    } else {
      // Otherwise, open the video
      setSelectedVideo(videoUrl);
    }
  };
  const handleKeyDown = (event, videoUrl) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedVideo(videoUrl);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };
  const tilePhotosVideos = [
    {
      id: 1,
      Photo: "/assets/logo/lollogo.webp",
      gif: "https://media.tenor.com/Wo5UCMqKYBYAAAAd/darts-pdc.gif",
      video: "/assets/videos/video1.mp4",
      alt: "league of legend logo",
      desc: "league of legend tile",
    },
    {
      id: 2,
      Photo: "/assets/logo/codlogo.webp",
      gif: "https://media.tenor.com/XQN8fuKuXQcAAAAd/warzone-fight.gif",
      video: "/assets/videos/video2.mp4",
      alt: "call of duty logo",
      desc: "call of duty tile",
    },
    {
      id: 3,
      Photo: "/assets/logo/csgologo.webp",
      gif: "https://media.tenor.com/X0zmhgHH5QcAAAAC/blast-pro-series-blast.gif",
      video: "/assets/videos/video3.mp4",
      alt: "counter strike  logo",
      desc: "counter strike tile",
    },
    {
      id: 4,
      Photo: "/assets/logo/fortlogo.webp",
      gif: "https://media.tenor.com/aevZ-Z7i_ZUAAAAM/fortnite-battle-bus.gif",
      video: "/assets/videos/video4.mp4",
      alt: "fortnite logo",
      desc: "fortnite tile",
    },
  ];

  return (
    <div className="DysneyCatBox">
      {tilePhotosVideos.map((photoVideo) => (
        <div
          className="tile"
          key={photoVideo.id}
          onClick={() => handleSlideClick(photoVideo.video)}
          onKeyDown={(e) => handleKeyDown(e, photoVideo.video)}
          role="button"
          tabIndex="0"
        >
          <div className="tile-border">
            <img
              alt={photoVideo.alt}
              className="tile-image"
              src={photoVideo.Photo}
            />
            <img
              alt={photoVideo.desc}
              className="tile-image hover-image"
              src={photoVideo.gif}
            />
          </div>
        </div>
      ))}

      {selectedVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <video controls width="100%" height="auto">
              <source src={selectedVideo} type="video/mp4" />
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button
            type="button"
            className="video-modal-close-button"
            onClick={closeModal}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
}
