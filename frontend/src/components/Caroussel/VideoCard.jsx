import PropTypes from "prop-types";

function VideoCard({ videoSrc, caption }) {
  return (
    <div className="video-border">
      <img alt="" className="video-caption" src={caption} />
      <img alt="" className="video-caption hover-video" src={videoSrc} />
    </div>
  );
}

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default VideoCard;
