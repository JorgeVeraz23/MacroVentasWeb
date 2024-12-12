import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


// import MotivosPage from "../../../pages/MantenedoresGenerales/Motivo/MostrarMotivo";

import InicioPage from "../../../pages/InicioPage";
// import CrearMotivo from "../../../pages/MantenedoresGenerales/Motivo/CrearMotivo";
import NotFoundPage from "../../../components/NotFoundPage";


const PrivateRoutes = () => {
  const isAuthenticated = !!localStorage.getItem('Token');

  if (!isAuthenticated) {
    return <Navigate to="/public/IniciarSesion" />;
  }

  return (
    <Routes>
      <Route path="/inicio" element={<InicioPage />} />


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default PrivateRoutes;
