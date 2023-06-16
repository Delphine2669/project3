function Video() {
  return (
    <video
      controls
      width="100%"
      src="/videos/Cyberpucnk_2077_court_circuit.mp4"
    >
      <track
        default
        kind="captions"
        srcLang="fr"
        src="./public/videos/videos.vtt"
      />
      Sorry, your browser doesn't support videos.
    </video>
  );
}

export default Video;
