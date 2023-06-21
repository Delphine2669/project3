function Video() {
  const videoPath = "/videos/";

  const videos = [
    "Cyberpucnk_2077_court_circuit.mp4",
    "Cyberpucnk_2077_Panam_in_trouble.mp4",
  ];
  return (
    <div>
      {videos.map((video) => (
        <video key={video} controls width="100%" src={videoPath + video}>
          <track
            default
            kind="captions"
            srcLang="fr"
            src="./public/videos/videos.vtt"
          />
          Sorry, your browser doesn't support videos.
        </video>
      ))}
    </div>
  );
}

export default Video;
