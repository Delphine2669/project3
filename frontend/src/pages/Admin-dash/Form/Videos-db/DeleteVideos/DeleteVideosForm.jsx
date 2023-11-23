import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toastr from "toastr";
import { authFetch } from "../../../../../utilities/utils";
import "./DeleteVideosForm.scss";
import Header from "../../../../../components/Header/Header";

toastr.options = {
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
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setVideoData(data);
        //  => ({
        //   ...prevData,
        //   ...data,
        // }));
      } catch (error) {
        console.error("Error fetching video data:", error);
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
      toastr.success("Video successfully deleted!");
    } catch (error) {
      console.error("Error deleting video:", error);
      toastr.error("Video deletion failed.");
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
          <br />
          <div className="title-section">
            <label htmlFor="title" className="edit-video-label">
              Title:
            </label>
            <p className="video-data-title">{videoData.title}</p>
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
