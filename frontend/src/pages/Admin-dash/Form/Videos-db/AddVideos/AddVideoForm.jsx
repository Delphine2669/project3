import React, { useState, useRef } from "react";
import axios from "axios";
import toastr from "toastr";
import { NavLink } from "react-router-dom";
import "./AddVideoForm.scss";
import Header from "../../../../../components/Header/Header";
import Footer from "../../../../../components/Footer/Footer";

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
};

function AddVideoForm() {
  const inputRef = useRef(null);

  const [data, setData] = useState({
    title: "",
    time: "",
    description: "",
    publicationDate: "",
    isFavorite: "",
    isAccessible: "",
    videoData: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      title,
      time,
      description,
      publicationDate,
      isFavorite,
      isAccessible,
      videoData,
    } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("publicationDate", publicationDate);
    formData.append("videoData", videoData);
    formData.append("isAccessible", isAccessible);
    formData.append("isFavorite", isFavorite);

    const payload = {
      title,
      time,
      description,
      publicationDate,
      isAccessible,
      isFavorite,
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
      toastr.success("Video successfully added!");
      setData({
        title: "",
        time: "",
        description: "",
        publicationDate: "",
        isAccessible: "",
        isFavorite: "",
        videoData: null,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      toastr.error("Video upload failed.");
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
              className="input-avf"
              id="title"
              placeholder="Titre"
              type="text"
              name="title"
              required
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="time-section">
            <label htmlFor="time">Duration:</label>
            <input
              className="input-avf"
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
              className="input-avf"
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
            <label htmlFor="publicationDate">Publication date:</label>
            <input
              className="input-avf"
              id="publicationDate"
              placeholder="Date de publication"
              type="date"
              name="publicationDate"
              value={data.publicationDate}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="is-Accessible-section-block">
            <label htmlFor="isAccessible">is Accessible ?</label>
            <div className="is-Accessible-section">
              <label className="is-Accessible-yes">
                <input
                  className="input-avf"
                  id="isAccessibleTrue"
                  type="radio"
                  name="isAccessible"
                  value="1"
                  checked={data.isAccessible === "1"}
                  onChange={handleChange}
                />
                Yes:
              </label>
              <label className="is-Accessible-no">
                <input
                  className="input-avf"
                  id="isAccessibleFalse"
                  type="radio"
                  name="isAccessible"
                  value="0"
                  checked={data.isAccessible === "0"}
                  onChange={handleChange}
                />
                No:
              </label>
            </div>
          </div>
          {/* <br />
          <div className="is-Favorite-section-block">
            <label htmlFor="isFavorite">is Favorite ?</label>
            <div className="is-Favorite-section">
              <label className="is-Favorite-yes">
                <input
                  className="input-avf"
                  id="isFavoriteTrue"
                  type="radio"
                  name="isFavorite"
                  value="1"
                  checked={data.isFavorite === "1"}
                  onChange={handleChange}
                />
                Yes:
              </label>
              <label className="is-Favorite-no">
                <input
                  className="input-avf"
                  id="isFavoriteFalse"
                  type="radio"
                  name="isFavorite"
                  value="0"
                  checked={data.isFavorite === "0"}
                  onChange={handleChange}
                />
                No:
              </label>
            </div>
          </div> */}
          <br />
          <div className="video-data-section">
            <label htmlFor="videoData">Vidéo:</label>
            <input
              id="videoData"
              type="file"
              name="videoData"
              required
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
