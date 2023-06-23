import "./Caroussel.scss";
import PropTypes from "prop-types";
import PhotoCard from "./PhotoCard";

function Caroussel({ photoList }) {
  return (
    <div className="carousel">
      <div className="carousel-photocard-container">
        {photoList.map((photo) => (
          <div key={photo.id} className="carousel-photocard-body">
            <PhotoCard
              imageSrc={photo.src}
              alt={photo.alt}
              title={photo.title}
              description={photo.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
Caroussel.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Caroussel;
