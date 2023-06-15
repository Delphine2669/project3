import "./Card.scss";
import PropTypes from "prop-types";

function Carousel({ photoList }) {
  return (
    <div className="carousel">
      {photoList.map((photo) => (
        <div key={photo.id}>
          <figure>
            <img
              src={photo.src}
              alt={photo.alt}
              className="photo-carousel"
              width="250px"
              height="150px"
            />
            <figcaption>{photo.description}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
Carousel.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
