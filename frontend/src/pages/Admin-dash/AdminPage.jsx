import { NavLink } from "react-router-dom";
// import axios from "axios";
import { toast } from "react-toastify";
import "./AdminPage.scss";
import Header from "../../components/Header/Header";

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

async function downloadViewerListAsCSV() {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"
      }/export-csv`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "viewer_list.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("csv successfully downloaded");
  } catch (error) {
    console.error("Error downloading CSV:", error);
    toast.error("error downloading the csv file");
  }
}
function AdminPage() {
  return (
    <div className="page-container-box">
      <Header />
      <div className="page-container">
        <h1 className="admin-title">Admin Page</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <td className="td-video-title">Video</td>
              <td className="td-photo-title">Photos</td>
              <td className="td-viewer-title">Viewer</td>
            </tr>
          </thead>
          <tbody>
            <tr className="first-row">
              <td className="td-add-video">
                <NavLink to="/addvideos" className="link-add-video-link">
                  Adding a video
                </NavLink>
              </td>
              <td className="td-add-photo">
                <NavLink to="/addphotos" className="link-add-photo-link">
                  Adding a photo
                </NavLink>
              </td>
              <td rowSpan="3" className="td-edit-viewer">
                <NavLink to="/editviewers" className="link-edit-viewer-link">
                  Editing a viewer
                </NavLink>
              </td>
            </tr>
            <tr>
              <td className="td-edit-video">
                <NavLink to="/editvideos" className="link-edit-video-link">
                  Editing a video
                </NavLink>
              </td>
              <td className="td-edit-photo">
                <NavLink to="/editphotos" className="link-edit-photo-link">
                  Editing a photo
                </NavLink>
              </td>
            </tr>
            <tr>
              <td className="td-delete-video">
                <NavLink to="/deletevideos" className="link-delete-video-link">
                  Deleting a video
                </NavLink>
              </td>
              <td className="td-delete-photo">
                <NavLink to="/deletephotos" className="link-delete-photo-link">
                  Deleting a photo
                </NavLink>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button
                  type="button"
                  onClick={downloadViewerListAsCSV}
                  className="link-download-viewer-list"
                >
                  Download viewer list as CSV
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminPage;
