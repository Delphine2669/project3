import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";
import AddVideoForm from "./pages/Admin-dash/Form/Videos-db/AddVideos/AddVideoForm";
import { AuthProvider } from "./contexts/AuthContext";
import AdminPage from "./pages/Admin-dash/AdminPage";
import DeleteVideosForm from "./pages/Admin-dash/Form/Videos-db/DeleteVideos/DeleteVideosForm";
import EditVideosForm from "./pages/Admin-dash/Form/Videos-db/EditVideos/EditVideosForm";
import EditViewerForm from "./pages/Admin-dash/Form/Viewers-db/EditViewer/EditViewerForm";

export default function App() {
  const storedToken = localStorage.getItem("token");

  return (
    <AuthProvider initialToken={storedToken}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addvideos" element={<AddVideoForm />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/deletevideos" element={<DeleteVideosForm />} />
          <Route path="/editvideos" element={<EditVideosForm />} />
          <Route path="/editviewers" element={<EditViewerForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
