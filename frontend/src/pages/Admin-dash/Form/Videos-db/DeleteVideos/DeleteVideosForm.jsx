import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { authFetch } from "../../../../../utilities/utils";
import "./DeleteVideosForm.scss";
import Header from "../../../../../components/Header/Header";

toast.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "200",
  hideDuration: "500",
  timeOut: "3000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
  escapeHtml: true,
};
function DeleteVideosForm() {
  const [videoId, setVideoId] = useState("");
  const [videoData, setVideoData] = useState({
    title: "",
    time: "",
    description: "",
    publicationDate: "",
    // file: null,
  });
  const [idError, setIdError] = useState("");
  //   const inputRef = useRef(null);
  //   const [data, setData] = useState({
  //     title: "",
  //     time: "",
  //     description: "",
  //     publicationDate: "",
  //     videoData: null,
  //   });
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        if (!videoId) {
          console.error("Invalid viewer ID");
          setIdError("Invalid viewer ID");
          setVideoData({
            title: "",
            time: "",
            description: "",
            publicationDate: "",
          });
          return;
        }
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          console.error("Video not found");
          setIdError("Video not found");
          return;
        }
        const data = await response.json();
        setVideoData(data);
        setIdError("");
        //  => ({
        //   ...prevData,
        //   ...data,
        // }));
      } catch (error) {
        console.error("Error fetching video data:", error);
        setIdError("Error fetching video data");
      }
    };

    fetchVideoData();
  }, [videoId]);

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
      toast.success("Video successfully deleted!");
    } catch (error) {
      console.error("Error deleting video:", error);
      toast.error("Video deletion failed.");
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
          Back
        </NavLink>
      </div>
      <div className="delete-video-form-container">
        <h1 className="delete-video-form-title">DELETE VIDEOS</h1>
        {videoId && idError && (
          <p className="delete-video-error-message">{idError}</p>
        )}
        <form
          method="POST"
          action={`${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`}
          className="delete-video-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="videoID">Id of the Video:</label>
          <input
            min="0"
            className="input-dvf"
            id="videoId"
            type="number"
            placeholder="Enter the id of the video to delete"
            value={videoId}
            onChange={handleVideoIdChange}
          />
          <br />
          <div className="title-section">
            <label htmlFor="title" className="delete-video-title-label">
              Title:
            </label>
            <p className="delete-video-data-title">{videoData.title}</p>
          </div>
          <div className="description-section">
            <label
              htmlFor="description"
              className="delete-video-description-label"
            >
              Description:
            </label>
            <p className="delete-video-data-description">
              {videoData.description}
            </p>
          </div>
          <button type="submit" onClick={handleDelete}>
            Delete video
          </button>
        </form>
      </div>
    </div>
  );
}
export default DeleteVideosForm;
