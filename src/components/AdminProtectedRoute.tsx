// src/components/AdminProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  return token ? <>{children}</> : <Navigate to="/admin" replace />;
};

export default AdminProtectedRoute;
