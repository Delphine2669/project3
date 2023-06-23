import PropTypes from "prop-types";
import VideoCard from "./Caroussel/VideoCard";

function Video({ videoList }) {
  // const videos = [
  //   "Cyberpucnk_2077_court_circuit.mp4",
  //   "Cyberpucnk_2077_Panam_in_trouble.mp4",
  //   "Cyberpucnk_2077_court_circuit.mp4",
  //   "Cyberpucnk_2077_Panam_in_trouble.mp4",
  // ];
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
