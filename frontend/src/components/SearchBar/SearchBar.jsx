import { useState, useEffect } from "react";
import "./SearchBar.css";
import ApiCalls from "../../utilities/utils";

function Searchbar() {
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  useEffect(() => {
    async function fetchTitle() {
      try {
        const fetchedVideos = await ApiCalls.videoCall();
        setAllVideos(fetchedVideos);
        if (isSearchBarActive) {
          // Si la recherche est active, filtrer les vidéos en fonction du texte de recherche
          const filteredVideos = fetchedVideos.filter((video) =>
            video.title.toLowerCase().includes(isSearchBarActive.toLowerCase())
          );
          setVideos(filteredVideos);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données vidéo :",
          error
        );
      }
    }
    fetchTitle();
  }, [isSearchBarActive]);

  // const onSearch = (searchText) => {
  //   if (searchText.trim() !== "") {
  //     const filteredVideos = allVideos.filter((video) =>
  //       video.title.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     setVideos(filteredVideos);
  //   } else {
  //     setVideos([]);
  //   }
  //   setIsSearchBarActive(searchText);
  // };

  const onChangeSearch = (event) => {
    const searchText = event.target.value;
    if (searchText.trim() !== "") {
      const filteredVideos = allVideos.filter((video) =>
        video.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setVideos(filteredVideos);
    } else {
      setVideos([]);
    }
    setIsSearchBarActive(searchText);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
        // onSearch={onSearch}
        onChange={onChangeSearch}
      />
      <div className="search-list-video" hidden={!isSearchBarActive}>
        {videos.map((video) => (
          <div className="video-cat_container" key={video.id}>
            <video
              controls
              className="miniature"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                video.videoData
              }`}
              type="video/mp4"
            >
              <track
                src="../../assets/WEBVTT.vtt"
                kind="captions"
                label="French"
              />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Searchbar;
