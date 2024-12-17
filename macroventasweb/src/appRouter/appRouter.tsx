import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import PublicRoutes from "../publicRoutes/publicRoutes";
import PrivateRoutes from "../privateRoutes/privateRoutes";

const AppRouter: React.FC = () => {
  // Simulación de autenticación (reemplázalo con tu lógica real)
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes isAuthenticated={isAuthenticated} />
    </Router>
  );
};

export default AppRouter;
