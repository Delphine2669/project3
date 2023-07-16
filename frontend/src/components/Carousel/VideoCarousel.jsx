import React, { useState, useEffect } from "react";
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
      <h3 className="categories-title">World League of Legends</h3>
      <div className="video-carousel">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <VideoCard
              videoSrc={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                video.videoSrc
              }`}
              caption={video.caption}
              title={video.title}
              description={video.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Video;
