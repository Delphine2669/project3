import "./DisneyCat.scss";

export default function DysneyCat() {
  const dysneyPhotosVideos = [
    {
      dysneyPhoto:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&amp;aspectRatio=1.78&amp;format=png",
      videoDysney:
        "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9",
    },
    {
      dysneyPhoto:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png",
      videoDysney:
        "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316",
    },
    {
      dysneyPhoto:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png",
      videoDysney:
        "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624",
    },
    {
      dysneyPhoto:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png",
      videoDysney:
        "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577",
    },
    {
      dysneyPhoto:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png",
      videoDysney:
        "https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_16793CC7E2AF7B8687B0DD00673503CBC14CB2C801952D62B4551B6866073650",
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
