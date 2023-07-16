import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import AddVideoForm from "./pages/Form/AddVideoForm";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/addvideo" element={<AddVideoForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
