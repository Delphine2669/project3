import React, { useState, useRef } from "react";
import axios from "axios";
import "./AddVideoForm.scss";

function AddVideoForm() {
  const inputRef = useRef(null);
  const [data, setData] = useState({
    title: "",
    time: "",
    description: "",
    publicationDate: "",
    videoData: null, // Initialize videoData as null
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("time", data.time);
    formData.append("description", data.description);
    formData.append("publicationDate", data.publicationDate);
    formData.append("videoData", data.videoData);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/viewer/video`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 5000,
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setData({ ...data, videoData: e.target.files[0] });
  };

  return (
    <div>
      <form
        method="POST"
        encType="multipart/form-data"
        action={`http://localhost:${
          import.meta.env.VITE_BACKEND_URL
        }/viewer/video`}
        className="add-video-form"
        onSubmit={handleSubmit}
      >
        <div className="title-section">
          <label htmlFor="title">Titre:</label>
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
          <label htmlFor="time">Durée:</label>
          <input
            id="time"
            placeholder="Durée en seconde"
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
          <label htmlFor="publicationDate">Date de publication:</label>
          <input
            id="publicationDate"
            placeholder="Date de publication"
            type="date"
            name="publicationDate"
            value={data.publicationDate}
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
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default AddVideoForm;
