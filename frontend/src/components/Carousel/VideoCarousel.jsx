import React, { useState, useEffect } from "react";
import "./VideoCarousel.scss";
import ApiCalls from "../../utils";
import VideoCard from "./VideoCard/VideoCard";

function Video() {
  const [videos, setVideos] = useState([]);

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

  return (
    <>
      <h2 className="catégories"> Worlds League of Legends</h2>
      <div className="video-carousel">
        <div className="video-container">
          {videos.map((video) => (
            <div key={video.id}>
              <VideoCard
                videoSrc={`${import.meta.env.VITE_BACKEND_URL}/assets${
                  video.videoSrc
                }`}
                caption={video.caption}
                title={video.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Video;
