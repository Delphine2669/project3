import Video1 from "../../../backend/public/assets/videos/Cyberpucnk_2077_court_circuit.mp4";
import Video2 from "../../../backend/public/assets/videos/Cyberpucnk_2077_Panam_in_trouble.mp4";

function Videos() {
  return (
    <div>
      <video controls src={Video1} width="300px" height="150px">
        Your browser does not support the video tag.
      </video>
      <video controls src={Video2} width="300px" height="150px">
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videos;
