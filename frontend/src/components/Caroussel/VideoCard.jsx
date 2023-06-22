import PropTypes from "prop-types";
import "./VideoCard.scss";

function VideoCard({ videoSrc, caption, title }) {
  return (
    <div className="card-dynamic">
      <video className="video" controls width="100%" src={videoSrc}>
        <track default kind="captions" srcLang="fr" src={caption} />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        
      </div>
    </div>
  );
}
VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default VideoCard;
