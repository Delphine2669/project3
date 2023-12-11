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
        <NavLink to="/addvideos" className="link-add-video-link">
          Adding a video
        </NavLink>
        <NavLink to="/editvideos" className="link-edit-video-link">
          Editing a video
        </NavLink>
        <NavLink to="/deletevideos" className="link-delete-video-link">
          Deleting a video
        </NavLink>
        <NavLink to="/editviewers" className="link-edit-viewer-link">
          Editing a viewer
        </NavLink>
        <button
          type="button"
          onClick={downloadViewerListAsCSV}
          className="link-download-viewer-list"
        >
          Download viewer list as CSV
        </button>
      </div>
    </div>
  );
}
export default AdminPage;
