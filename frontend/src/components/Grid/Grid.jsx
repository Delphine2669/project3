import React, { useState, useEffect } from "react";
import ApiCalls from "../../utils";
import VideoCard from "../Carousel/VideoCard/VideoCard";
import "./Grid.scss";

function Grid() {
  const [videos, setVideos] = useState([]);
  const [videoPlus, setVideoPlus] = useState(4);
  const videoToLoad = 15;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const fetchedVideos = await ApiCalls.videoCall();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      }
    }

    fetchVideos();
  }, []);

  const loadMoreVideos = () => {
    setVideoPlus((prevVisibleVideos) => prevVisibleVideos + videoToLoad);
  };

  const visibleVideoData = videos.slice(0, videoPlus);
  const showLoadMoreButton = videoPlus < videos.length;

  return (
    <div className="video-grid">
      <p className="video-grid-categorie">Intel Extreme Masters 2023</p>
      <div className="grid-container">
        {visibleVideoData.map((video) => (
          <div key={video.id}>
            <VideoCard
              videoSrc={`${import.meta.env.VITE_BACKEND_URL}/assets${
                video.videoSrc
              }`}
              caption={video.caption}
              title={video.title}
              description={video.description}
            />
          </div>
        ))}
      </div>
      {showLoadMoreButton && (
        <button className="voirPlus" type="button" onClick={loadMoreVideos}>
          +
        </button>
      )}
    </div>
  );
}

export default Grid;
