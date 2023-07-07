import PropTypes from "prop-types";

function VideoCard({ videoSrc, caption }) {
  return (
    <video className="video" src={videoSrc}>
      <track default kind="captions" srcLang="fr" src={caption} />
      Sorry, your browser doesn't support videos.
    </video>
  );
}

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default VideoCard;
