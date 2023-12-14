import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toastr from "toastr";
import "./EditPhotoForm.scss";
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
};
function EditPhotoForm() {
  const [photoId, setphotoId] = useState("");
  // const inputRef = useRef(null);

  const [photoData, setphotoData] = useState({
    title: "",
    description: "",
    // file: null,
  });

  useEffect(() => {
    const fetchphotoData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setphotoData(data);
        //  => ({
        //   ...prevData,
        //   ...data,
        // }));
      } catch (error) {
        console.error("Error fetching photo data:", error);
      }
    };

    fetchphotoData();
  }, [photoId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(photoData),
      });
      toastr.success("photo successfully updated!");
    } catch (error) {
      console.error("Error updating photo:", error);
      toastr.error("photo update failed.");
    }
  };

  const handlephotoIdChange = (event) => {
    setphotoId(event.target.value);
  };

  const handleChange = (e) => {
    setphotoData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleFileChange = (ev) => {
  //   setphotoData((prevData) => ({
  //     ...prevData,
  //     file: ev.target.files[0],
  //   }));
  // };

  return (
    <div className="edit-photo-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back
        </NavLink>
      </div>
      <div className="edit-photo-form-container">
        <h1 className="edit-photo-form-title">EDIT PHOTOS</h1>
        <form
          method="PUT"
          encType="multipart/form-data"
          action={`${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}`}
          className="edit-photo-form"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="photoId"
            className="photo-id-input-label edit-photo-label"
          >
            Id of the photo:
          </label>
          <br />
          <input
            id="photoId"
            type="number"
            placeholder="Enter the id of the photo to edit"
            value={photoId}
            className="photo-id-input input-epf"
            onChange={handlephotoIdChange}
          />
          <br />
          <div className="title-section">
            <label htmlFor="title" className="edit-photo-label">
              Title:
            </label>
            <input
              className="input-epf"
              id="title"
              placeholder="Title"
              type="text"
              name="title"
              value={photoData.title}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="description-section">
            <label htmlFor="description" className="edit-photo-label">
              Description:
            </label>
            <input
              className="input-evf"
              id="description"
              placeholder="Description"
              type="text"
              name="description"
              value={photoData.description}
              onChange={handleChange}
              required
            />
          </div>
          <button className="Update" type="submit">
            Update photo
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPhotoForm;
