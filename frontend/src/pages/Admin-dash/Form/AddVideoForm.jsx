import React, { useState, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./AddVideoForm.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function AddVideoForm() {
  const inputRef = useRef(null);

  const [data, setData] = useState({
    title: "",
    time: "",
    description: "",
    publicationDate: "",
    videoData: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, time, description, publicationDate, videoData } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("publication_date", publicationDate);
    formData.append("videoData", videoData);

    const payload = {
      title,
      time,
      description,
      publicationDate,
      videoData: `/videos/${videoData.name}`,
    };

    formData.append("payload", JSON.stringify(payload));

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/videos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 5000,
      });
      alert("Video successfully added!");
      setData({
        title: "",
        time: "",
        description: "",
        publicationDate: "",
        videoData: null,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Video upload failed.");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileChange = (ev) => {
    setData({ ...data, videoData: ev.target.files[0] });
  };

  return (
    <div className="add-video-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back to the Admin Page
        </NavLink>
      </div>
      <div className="add-video-form-container">
        <h1 className="add-video-form-title">ADD VIDEOS</h1>
        <form
          method="POST"
          encType="multipart/form-data"
          action={`${import.meta.env.VITE_BACKEND_URL}/videos`}
          className="add-video-form"
          onSubmit={handleSubmit}
        >
          <div className="title-section">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              placeholder="Titre"
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="time-section">
            <label htmlFor="time">Duration:</label>
            <input
              id="time"
              placeholder="Duration in seconds"
              type="number"
              name="time"
              value={data.time}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="description-section">
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              placeholder="Description"
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="publication-date-section">
            <label htmlFor="publication_date">Publication date:</label>
            <input
              id="publication_date"
              placeholder="Date de publication"
              type="date"
              name="publicationDate"
              value={data.publication_date}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="video-data-section">
            <label htmlFor="videoData">Vidéo:</label>
            <input
              id="videoData"
              type="file"
              name="videoData"
              ref={inputRef}
              onChange={handleFileChange}
            />
          </div>
          <br />
          <button type="submit">Add video</button>
        </form>
      </div>
      <div className="footerAdmin">
        <Footer />
      </div>
    </div>
  );
}

export default AddVideoForm;
