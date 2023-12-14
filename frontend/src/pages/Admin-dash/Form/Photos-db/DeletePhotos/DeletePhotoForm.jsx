import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toastr from "toastr";
import { authFetch } from "../../../../../utilities/utils";
import "./DeletePhotoForm.scss";
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
function DeletePhotoForm() {
  const [photoId, setPhotoId] = useState("");
  const [photoData, setPhotoData] = useState({
    title: "",
    description: "",
  });
  const [idError, setIdError] = useState("");

  //   const inputRef = useRef(null);
  //   const [data, setData] = useState({
  //     title: "",
  //     description: "",
  //     photoData: null,
  //   });
  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        if (!photoId) {
          console.error("Invalid viewer ID");
          setIdError("Invalid viewer ID");
          setPhotoData({
            title: "",
            description: "",
          });
          return;
        }
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}`,
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
        setPhotoData(data);
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

    fetchPhotoData();
  }, [photoId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await authFetch(
        `${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}`,
        {
          method: "DELETE",
        },
        token
      );
      toastr.success("photo successfully deleted!");
    } catch (error) {
      console.error("Error deleting photo:", error);
      toastr.error("photo deletion failed.");
    }
  };
  const handlephotoIdChange = (event) => {
    setPhotoId(event.target.value);
  };
  return (
    <div className="delete-photo-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          Back
        </NavLink>
      </div>
      <div className="delete-photo-form-container">
        <h1 className="delete-photo-form-title">DELETE PHOTOS</h1>
        {photoId && idError && (
          <p className="delete-photo-error-message">{idError}</p>
        )}
        <form
          method="POST"
          action={`${import.meta.env.VITE_BACKEND_URL}/photos/${photoId}`}
          className="delete-photo-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="photoID">Id of the photo:</label>
          <input
            className="input-dpf"
            id="photoId"
            type="number"
            placeholder="Enter the id of the photo to delete"
            value={photoId}
            onChange={handlephotoIdChange}
          />
          <div className="title-section">
            <label htmlFor="title" className="delete-photo-title-label">
              Title:
            </label>
            <p className="video-data-title">{photoData.title}</p>
          </div>
          <button type="submit" onClick={handleDelete}>
            Delete photo
          </button>
        </form>
      </div>
    </div>
  );
}
export default DeletePhotoForm;
