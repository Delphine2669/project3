import photo from "../../../../backend/public/assets/images/video1.png";

function Card() {
  return (
    <div>
      <figure>
        <img
          src={photo}
          alt="screen court circuit "
          width="250px"
          height="150px"
        />
        <figcaption>RPG</figcaption>
      </figure>
    </div>
  );
}
export default Card;
