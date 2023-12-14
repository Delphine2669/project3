import axios from "axios";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import toastr from "toastr";
import Header from "../../../../../components/Header/Header";
import "./AddPhotoForm.scss";

function AddPhotoForm() {
  const inputRef = useRef(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    imageSrc: null,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, imageSrc } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("imageSrc", imageSrc);

    const payload = {
      title,
      description,
      imageSrc: `/image/${imageSrc.name}`,
    };
    formData.append("payload", JSON.stringify(payload));
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/photos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 5000,
      });
      toastr.success("photo successfully added");
      setData({
        title: "",
        description: "",
        imageSrc: null,
      });
    } catch (error) {
      console.error("error uploading file");
      toastr.error("photo upload failed");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileChange = (ev) => {
    setData({ ...data, imageSrc: ev.target.files[0] });
  };
  return (
    <div className="add-photo-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back
        </NavLink>
      </div>
      <div className="add-photo-form-container">
        <h1 className="add-photo-form-title">ADD PHOTOS</h1>
        <form
          method="POST"
          encType="multipart/form-data"
          action={`${import.meta.env.VITE_BACKEND_URL}/photos`}
          className="add-photo-form"
          onSubmit={handleSubmit}
        >
          <div className="title-section">
            <label htmlFor="title">Title:</label>
            <input
              className="input-apf"
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
          <div className="photo-data-section">
            <label htmlFor="imageSrc">Photo:</label>
            <input
              id="imageSrc"
              type="file"
              name="imageSrc"
              required
              ref={inputRef}
              onChange={handleFileChange}
            />
          </div>
          <br />
          <button type="submit">Add photo</button>
        </form>
      </div>
    </div>
  );
}

export default AddPhotoForm;
