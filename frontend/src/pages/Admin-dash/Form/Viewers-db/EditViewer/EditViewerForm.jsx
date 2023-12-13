import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./EditViewerForm.scss";
import Footer from "../../../../../components/Footer/Footer";
import Header from "../../../../../components/Header/Header";

toast.options = {
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
function EditViewerForm() {
  const navigate = useNavigate();

  const [viewerId, setViewerId] = useState("");
  const [idError, setIdError] = useState("");
  const [viewerData, setViewerData] = useState({
    username: "",
    email: "",
    birthday: "",
    isFavorite: "",
    isAdmin: "",
  });

  useEffect(() => {
    const fetchViewerData = async () => {
      try {
        if (!viewerId || viewerId === "1") {
          console.error("Invalid viewer ID");
          setIdError("Invalid viewer ID");
          setViewerData({
            username: "",
            email: "",
            birthday: "",
            isFavorite: "",
            isAdmin: "",
          });
          return;
        }
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/viewers/${viewerId}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          console.error("Viewer not found");
          setIdError("Viewer not found");
          return;
        }
        const data = await response.json();
        setViewerData(data);
        setIdError("");
        //  => ({
        //   ...prevData,
        //   ...data,
        // }));
      } catch (error) {
        console.error("Error fetching viewer data:", error);
        setIdError("Error fetching viewer data");
      }
    };

    fetchViewerData();
  }, [viewerId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (viewerId === "1") {
      console.error("You cannot edit the viewer 1");
      return;
    }
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/viewers/${viewerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(viewerData),
      });
      toast.success("Viewer successfully updated!");
      navigate("/adminpage");
    } catch (error) {
      console.error("Error updating viewer:", error);
      toast.error("Viewer update failed.");
    }
  };

  const handleViewerIdChange = (event) => {
    setViewerId(event.target.value);
  };

  const handleChange = (e) => {
    const { value, type } = e.target;

    setViewerData((prevData) => ({
      ...prevData,
      isAdmin: type === "radio" ? value : value,
    }));
  };
  return (
    <div className="edit-viewer-form-box">
      <Header />
      <div>
        <NavLink to="/adminpage" className="back-button">
          back
        </NavLink>
      </div>
      <div className="edit-viewer-form-container">
        <h1 className="edit-viewer-form-title">Edit Viewer</h1>
        {viewerId && idError && (
          <p className="edit-viewer-error-message">{idError}</p>
        )}
        <form
          method="Patch"
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
            required
            onChange={handleViewerIdChange}
          />
          <br />
          <div className="username-section">
            <label htmlFor="username" className="edit-viewer-label">
              Username:
            </label>
            <p className="viewer-data-username">{viewerData.username}</p>
          </div>
          <br />
          <div className="email-section">
            <label htmlFor="email" className="edit-viewer-label">
              Email:
            </label>
            <p className="viewer-data-email">{viewerData.email}</p>
          </div>
          <br />
          <div className="birthday-section">
            <label htmlFor="birthday" className="edit-viewer-label">
              Date of birth:
            </label>
            <br />
            <input
              className="input-evf bd"
              id="birthday"
              placeholder="Birthday"
              type="date"
              name="birthday"
              value={viewerData.birthday}
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          {viewerId && (
            <div className="admin-status-section">
              <label htmlFor="admin-status" className="edit-viewer-label">
                Admin Status:
              </label>
              <p className="viewer-data-admin-status">
                {viewerData.isAdmin === "1" ? "Admin" : "Simple User"}
              </p>
            </div>
          )}
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
