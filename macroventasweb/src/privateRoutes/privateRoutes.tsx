import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRoutesProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({
  isAuthenticated,
  redirectPath = "/login",
}) => {
  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // Si está autenticado, renderizar las rutas hijas
  return <Outlet />;
};

export default PrivateRoutes;
