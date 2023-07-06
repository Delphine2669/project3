import React, { useState, useEffect } from "react";
import videoCall from "../../utils";
import VideoCard from "./VideoCard";
import "./VideoCard.scss";

function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const fetchedVideos = await videoCall();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="video-carousel">
      <p className="catégories"> Catégorie RPG</p>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id}>
            <VideoCard
              videoSrc={video.videoSrc}
              caption={video.caption}
              title={video.title}
              description={video.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
