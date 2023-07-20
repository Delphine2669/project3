import { useState, useEffect } from "react";
import "./SearchBar.css";
import { Input } from "antd";
import ApiCalls from "../../utils";

const { Search } = Input;

function Searchbar() {
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    async function fetchTitle() {
      try {
        const fetchedVideos = await ApiCalls.videoCall();
        setVideos(fetchedVideos);
        setAllVideos(fetchedVideos); // Save all videos to another state for filtering later
      } catch (error) {
        console.error("Error retrieving video data:", error);
      }
    }
    fetchTitle();
  }, []);

  const onSearch = (searchText) => {
    // Filter videos based on the title matching the search text
    const filteredVideos = allVideos.filter((video) =>
      video.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  return (
    <div className="main-search">
      <Search placeholder="Rechercher des vidéos" onSearch={onSearch} />
      <div className="video-list">
        {videos.map((video) => (
          <div className="video-cat_container" key={video.id}>
            <video
              controls
              className="minia"
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

// import { useState, useEffect } from "react";
// import "./SearchBar.css";
// import { Input } from "antd";
// import ApiCalls from "../../utils";

// const { Search } = Input;

// function Searchbar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     async function fetchTitle() {
//       try {
//         const fetchedTitle = await ApiCalls.videoCall();
//         setVideos(fetchedTitle);
//       } catch (error) {
//         console.error("Error retrieving video title:", error);
//       }
//     }
//     fetchTitle();
//   }, []);

//   const onSearch = (searchTerm) => {
//     const filteredVideos = videos.filter((video) =>
//       video.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setVideos(filteredVideos);
//   };
//   // On filtre les videos en fonction de la searchbar

//   return (
//     <div className="main-search">
//       <Search placeholder="input search text" onSearch={onSearch} />
//     </div>
//   );
// }

// export default Searchbar;
