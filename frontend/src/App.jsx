import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import AddVideoForm from "./pages/Home/Form/AddVideoForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/addvideo" element={<AddVideoForm />} />
      </Routes>
    </Router>
  );
}
