import photo1 from "../../../../backend/public/assets/images/video1.png";
import photo2 from "../../../../backend/public/assets/images/video2.png";

function PhotoList() {
  const photos = [
    { id: 1, src: { photo1 }, alt: "screen video 1", description: "RPG" },
    { id: 2, src: { photo2 }, alt: "screen video 2", description: "FPS" },
  ];

  return photos;
}
export default PhotoList;
