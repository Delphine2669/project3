import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toastr from "toastr";
import "./EditViewerForm.scss";
import Footer from "../../../../../components/Footer/Footer";
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
function EditViewerForm() {
  const [viewerId, setViewerId] = useState("");
  const [viewerData, setViewerData] = useState({
    isAdmin: "",
  });

  useEffect(() => {
    const fetchViewerData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/viewers/${viewerId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setViewerData(data);
        //  => ({
        //   ...prevData,
        //   ...data,
        // }));
      } catch (error) {
        console.error("Error fetching viewer data:", error);
      }
    };

    fetchViewerData();
  }, [viewerId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/viewers/${viewerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(viewerData),
      });
      toastr.success("Viewer successfully updated!");
    } catch (error) {
      console.error("Error updating viewer:", error);
      toastr.error("Viewer update failed.");
    }
  };

  const handleViewerIdChange = (event) => {
    setViewerId(event.target.value);
  };

  const handleChange = (e) => {
    setViewerData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="edit-video-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-admin-button">
          Back to the Admin Page
        </NavLink>
      </div>
      <div className="edit-viewer-form-container">
        <h1 className="edit-viewer-form-title">Edit Viewer</h1>
        <form
          method="PUT"
          encType="multipart/form-data"
          action={`${import.meta.env.VITE_BACKEND_URL}/viewers/${viewerId}`}
          className="edit-viewer-form"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="videoId"
            className="viewer-id-input-label edit-viewer-label"
          >
            Id of the Viewer:
          </label>
          <br />
          <input
            id="viewerId"
            type="number"
            placeholder="Enter the id of the viewer to edit"
            value={viewerId}
            className="viewer-id-input input-evf"
            onChange={handleViewerIdChange}
          />
          <br />
          <div className="is-Admin-section-block">
            <label htmlFor="isAdmin" className="edit-viewer-label">
              is Admin ?
            </label>
            <div className="is-Admin-section">
              <label className="is-Admin-yes">
                <input
                  className="input-evf"
                  id="isAdminTrue"
                  type="radio"
                  name="isAdmin"
                  value="1"
                  checked={viewerData.isAdmin === "1"}
                  onChange={handleChange}
                />
                Yes:
              </label>
              <label className="is-Admin-no">
                <input
                  className="input-evf"
                  id="isAdminFalse"
                  type="radio"
                  name="isAdmin"
                  value="0"
                  checked={viewerData.isAdmin === "0"}
                  onChange={handleChange}
                />
                No:
              </label>
            </div>
          </div>
          <br />
          <button type="submit">Update Viewer</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditViewerForm;
