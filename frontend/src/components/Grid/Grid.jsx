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
    <>
      <h2 className="video-grid-categorie">Exclusive videos on TSN Game</h2>
      <div className="video-grid">
        <div className="grid-container">
          {visibleVideoData.map((video) => (
            <div className="video-container-grid" key={video.id}>
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
          <button
            className="button show-more"
            type="button"
            onClick={loadMoreVideos}
          >
            <div className="button-text">Show more</div>
          </button>
        )}
      </div>
    </>
  );
}

export default Grid;
