import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../contexts/AuthContext";

function AdminRoute({ element: Element }) {
  const { token, isAdmin } = useAuth();
  console.info("Token in AdminRoute:", token);
  console.info("isAdmin in AdminRoute:", isAdmin);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <Route element={<Element />} />;
}

AdminRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default AdminRoute;
