import { NavLink } from "react-router-dom";
import "./AdminPage.scss";
import Header from "../../components/Header/Header";

function AdminPage() {
  return (
    <div className="page-container-box">
      <Header />
      <div className="page-container">
        <h1 className="admin-title">Admin Page</h1>

        <table className="admin-table">
          <td className="video-column">
            <tr className="tr-video-title">Video</tr>
            <tr className="tr-add-video">
              <NavLink to="/addvideos" className="link-add-video-link">
                Adding a video
              </NavLink>
            </tr>
            <tr className="tr-edit-video">
              <NavLink to="/editvideos" className="link-edit-video-link">
                Editing a video
              </NavLink>
            </tr>
            <tr className="tr-delete-video">
              <NavLink to="/deletevideos" className="link-delete-video-link">
                Deleting a video
              </NavLink>
            </tr>
          </td>

          <td className="photo-column">
            <tr className="tr-photo-title">Photos</tr>
            <tr className="tr-add-photo">
              <NavLink to="/addphotos" className="link-add-photo-link">
                adding a photo
              </NavLink>
            </tr>
            <tr className="tr-edit-photo">
              <NavLink to="/editphotos" className="link-edit-photo-link">
                editing a photo
              </NavLink>
            </tr>
            <tr className="tr-delete-photo">
              <NavLink to="/deletephotos" className="link-delete-photo-link">
                deleting a photo
              </NavLink>
            </tr>
          </td>
          <td className="viewer-column">
            <tr className="tr-viewer-title">Viewer</tr>
            <tr className="tr-edit-viewer">
              <NavLink to="/editviewers" className="link-edit-viewer-link">
                Editing a viewer
              </NavLink>
            </tr>
          </td>
        </table>
      </div>
    </div>
  );
}
export default AdminPage;
