import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const category = localStorage.getItem("category");
  const name = localStorage.getItem("name");

  // Agar dono values nahi hain to Welcome page par redirect
  if (!category || !name) {
    return <Navigate to="/" replace />;
  }

  // Agar values hain to route allow karo
  return <Outlet />;
};

export default ProtectedRoute;
