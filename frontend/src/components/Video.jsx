function Video() {
  const caption1 = "/video1.vtt";
  const caption2 = "/video2.vtt";

  const Video1 = "/assets/Cyberpucnk_2077_court_circuit.mp4";
  const Video2 = "/assets/Cyberpucnk_2077_Panam_in_trouble.mp4";
  return (
    <div>
      <video controls src={Video1} width="300px" height="150px">
        Your browser does not support the video tag.
        <track default kind="captions" srcLang="fr" src={caption1} />
      </video>
      <video controls src={Video2} width="300px" height="150px">
        Your browser does not support the video tag.
        <track default kind="captions" srcLang="fr" src={caption2} />
      </video>
    </div>
  );
}

export default Video;
