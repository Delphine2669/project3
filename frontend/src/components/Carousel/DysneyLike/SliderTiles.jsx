import "./SliderTiles.scss";

export default function SliderTiles() {
  const dysneyPhotosVideos = [
    {
      dysneyPhoto: "/assets/logo/lollogo.png",
      videoDysney: "https://media.tenor.com/Wo5UCMqKYBYAAAAd/darts-pdc.gif",
    },
    {
      dysneyPhoto: "/assets/logo/codlogo.png",
      videoDysney: "https://media.tenor.com/XQN8fuKuXQcAAAAd/warzone-fight.gif",
    },
    {
      dysneyPhoto: "/assets/logo/csgologo.png",
      videoDysney:
        "https://media.tenor.com/X0zmhgHH5QcAAAAC/blast-pro-series-blast.gif",
    },
    {
      dysneyPhoto: "/assets/logo/fortlogo.png",
      videoDysney:
        "https://media.tenor.com/aevZ-Z7i_ZUAAAAM/fortnite-battle-bus.gif",
    },
  ];

  return (
    <div className="DysneyCatBox">
      {dysneyPhotosVideos.map((photoVideo) => (
        <div className="item" key={photoVideo.id}>
          <div className="item-border">
            <img alt="" className="item-image" src={photoVideo.dysneyPhoto} />
            <img
              alt=""
              className="item-image hover-image"
              src={photoVideo.videoDysney}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
