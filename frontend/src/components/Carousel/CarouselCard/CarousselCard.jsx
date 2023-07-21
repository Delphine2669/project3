import PropTypes from "prop-types";
import "./CarouselCard.scss";

function CarousselCard({ videoSrc, caption, title }) {
  return (
    <>
      <h3 className="video-title">{title}</h3>
      <div className="carousel-card-static">
        <div>
          <video className="video" controls width="100%" src={videoSrc}>
            <track default kind="captions" srcLang="fr" src={caption} />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
      </div>
    </>
  );
}
CarousselCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default CarousselCard;
