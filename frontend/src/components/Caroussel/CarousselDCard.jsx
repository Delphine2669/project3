import PropTypes from "prop-types";
import "./CarousselDynamic.scss";

function CarousselDCard({ videoSrc, caption }) {
  return (
    <div className="carousselDcard-dynamic">
      <div>
        <video className="video" controls width="100%" src={videoSrc}>
          <track default kind="captions" srcLang="fr" src={caption} />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    </div>
  );
}
CarousselDCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
export default CarousselDCard;
