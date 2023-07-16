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
    videoData: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, time, description, publicationDate, videoData } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("publicationDate", publicationDate);
    formData.append("videoData", videoData);

    const payload = {
      title,
      time,
      description,
      publication_date: publicationDate,
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
      inputRef.current.value = "";
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Video upload failed.");
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
        action={`${import.meta.env.VITE_BACKEND_URL}/videos`}
        className="add-video-form"
        onSubmit={handleSubmit}
      >
        {/* Input fields */}
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
