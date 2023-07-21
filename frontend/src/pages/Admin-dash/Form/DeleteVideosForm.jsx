import { useState } from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom";
import { authFetch } from "../../../utils";
import "./DeleteVideosForm.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function DeleteVideosForm() {
  const [videoId, setVideoId] = useState("");

  //   const inputRef = useRef(null);
  //   const [data, setData] = useState({
  //     title: "",
  //     time: "",
  //     description: "",
  //     publicationDate: "",
  //     videoData: null,
  //   });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await authFetch(
        `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
        {
          method: "DELETE",
        },
        token
      );
      alert("Video successfully deleted!");
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Video deletion failed.");
    }
  };
  const handleVideoIdChange = (event) => {
    setVideoId(event.target.value);
  };
  return (
    <div className="delete-video-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back to the Admin Page
        </NavLink>
      </div>
      <div className="delete-video-form-container">
        <h1 className="delete-video-form-title">Delete Videos</h1>
        <form
          method="POST"
          action={`${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`}
          className="delete-video-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="videoID">Id of the Video:</label>
          <input
            className="input-dvf"
            id="videoId"
            type="number"
            placeholder="Enter the id of the video to delete"
            value={videoId}
            onChange={handleVideoIdChange}
          />
          <button type="submit" onClick={handleDelete}>
            Delete video
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default DeleteVideosForm;
