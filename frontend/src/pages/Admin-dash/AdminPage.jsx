import { Link } from "react-router-dom";
import "./AdminPage.scss";

function AdminPage() {
  return (
    <div className="page-container">
      <h1 className="admin-title">Admin Page</h1>
      <Link to="/addvideos" className="link add-video-link">
        Adding a video
      </Link>
      <Link to="/editvideos" className="link edit-video-link">
        Editing a video
      </Link>
      <Link to="/deletevideos" className="link delete-video-link">
        Deleting a video
      </Link>
    </div>
  );
}
export default AdminPage;
