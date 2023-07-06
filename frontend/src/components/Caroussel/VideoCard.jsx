import PropTypes from "prop-types";
import "./VideoCard.scss";

function VideoCard({ videoSrc, caption, title }) {
  return (
    <div>
      <video className="video" controls width="100%" src={videoSrc}>
        <track default kind="captions" srcLang="fr" src={caption} />
        Sorry, your browser doesn't support videos.
      </video>
      <p className="card-title">{title}</p>
    </div>
  );
}

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoCard;
