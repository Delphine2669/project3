import Video1 from "../../../backend/public/assets/videos/Cyberpucnk_2077_court_circuit.mp4";
import Video2 from "../../../backend/public/assets/videos/Cyberpucnk_2077_Panam_in_trouble.mp4";
import captionVid1 from "../../../backend/public/assets/video1.vtt";
import captionVid2 from "../../../backend/public/assets/video2.vtt";

function Videos() {
  return (
    <div>
      <video controls src={Video1} width="300px" height="150px">
        Your browser does not support the video tag.
        <track default kind="captions" src={captionVid1} />
      </video>
      <video autoPlay src={Video2} width="300px" height="150px">
        Your browser does not support the video tag.
        <track default kind="captions" src={captionVid2} />
      </video>
    </div>
  );
}

export default Videos;
