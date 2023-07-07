import PropTypes from "prop-types";
import VideoCard from "./Caroussel/VideoCard";
<<<<<<< HEAD
import "./Video.scss";

function Video({ videoList }) {
  return (
    <>
      <h3 className="categories-title">World League of Legends</h3>
      <div className="video-carousel">
        <div className="video-container">
          {videoList.map((video) => (
            <div className="video-card" key={video.id}>
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
    </>
=======

function Video({ videoList }) {
  return (
    <div className="video-carousel">
      <p className="catégories"> Catégorie RPG</p>
      <div className="video-container">
        {videoList.map((video) => (
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
>>>>>>> dev
  );
}
Video.propTypes = {
  videoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      videoSrc: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Video;
