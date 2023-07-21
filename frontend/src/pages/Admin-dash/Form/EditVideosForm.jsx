import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { authFetch } from "../../../utils";
import "./EditVideosForm.scss";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

function EditVideoForm() {
  const [videoId, setVideoId] = useState("");
  const inputRef = useRef(null);

  const [videoData, setVideoData] = useState({
    title: "",
    time: "",
    description: "",
    publicationDate: "",
    file: null,
  });

  useEffect(() => {
    // Fetch the video data based on the videoId
    const fetchVideoData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await authFetch(
          `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
          {
            method: "GET",
          },
          token
        );
        const data = await response.json();
        setVideoData((prevData) => ({
          ...prevData,
          ...data,
        }));
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", videoData.title);
    formData.append("time", videoData.time);
    formData.append("description", videoData.description);
    formData.append("publicationDate", videoData.publicationDate);
    formData.append("videoData", videoData.file);

    try {
      const token = localStorage.getItem("token");
      await authFetch(
        `${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`,
        {
          method: "PUT",
          body: formData,
        },
        token
      );
      alert("Video successfully updated!");
    } catch (error) {
      console.error("Error updating video:", error);
      alert("Video update failed.");
    }
  };

  const handleVideoIdChange = (event) => {
    setVideoId(event.target.value);
  };

  const handleChange = (e) => {
    setVideoData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (ev) => {
    setVideoData((prevData) => ({
      ...prevData,
      file: ev.target.files[0],
    }));
  };

  return (
    <div className="edit-video-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back to the Admin Page
        </NavLink>
      </div>
      <div className="edit-video-form-container">
        <h1 className="edit-video-form-title">Edit Video</h1>
        <form
          method="POST"
          encType="multipart/form-data"
          action={`${import.meta.env.VITE_BACKEND_URL}/videos/${videoId}`}
          className="edit-video-form"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="videoId"
            className="video-id-input-label edit-video-label"
          >
            Id of the Video:
          </label>
          <br />
          <input
            id="videoId"
            type="number"
            placeholder="Enter the id of the video to edit"
            value={videoId}
            className="video-id-input"
            onChange={handleVideoIdChange}
          />
          <br />
          <div className="title-section">
            <label htmlFor="title" className="edit-video-label">
              Title:
            </label>
            <input
              id="title"
              placeholder="Title"
              type="text"
              name="title"
              value={videoData.title}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="time-section">
            <label htmlFor="time" className="edit-video-label">
              Duration:
            </label>
            <input
              id="time"
              placeholder="Duration in seconds"
              type="number"
              name="time"
              value={videoData.time}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="description-section">
            <label htmlFor="description" className="edit-video-label">
              Description:
            </label>
            <input
              id="description"
              placeholder="Description"
              type="text"
              name="description"
              value={videoData.description}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="publication-date-section">
            <label htmlFor="publicationDate" className="edit-video-label">
              Publication date:
            </label>
            <input
              id="publicationDate"
              placeholder="Publication Date"
              type="date"
              name="publicationDate"
              value={videoData.publicationDate}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="video-data-section">
            <label htmlFor="videoData" className="edit-video-label">
              Video:
            </label>
            <input
              id="videoData"
              type="file"
              name="videoData"
              ref={inputRef}
              onChange={handleFileChange}
            />
          </div>
          <br />
          <button type="submit">Update Video</button>
        </form>
      </div>
      <div className="footerAdmin">
        <Footer />
      </div>
    </div>
  );
}

export default EditVideoForm;
