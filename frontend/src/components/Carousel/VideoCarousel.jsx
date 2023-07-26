import React, { useState, useEffect } from "react";
import "./VideoCarousel.scss";
import ApiCalls from "../../utilities/utils";
import VideoCard from "./VideoCard/VideoCard";

function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const fetchedVideos = await ApiCalls.videoCall();
        const sortedVideos = fetchedVideos.sort((a, b) => b.id - a.id);
        setVideos(sortedVideos);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      }
    }

    fetchVideos();
  }, []);

  const displayedVideos = videos.slice(0, 6);

  return (
    <>
      <h2 className="categories"> Latest videos uploaded</h2>
      <div className="video-carousel">
        <div className="video-container">
          {displayedVideos.map((video) => (
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
