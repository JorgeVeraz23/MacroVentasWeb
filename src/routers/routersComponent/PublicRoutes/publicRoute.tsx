import { element } from "prop-types";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../../pages/LoginPage";

const PublicRoutes = () => {
    const isAuthenticated = !!localStorage.getItem('Token'); // Verifica si hay un token en el localStorage

    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    if (isAuthenticated) {
      return <Navigate to="/private/Inicio" />;
    }
    return(
        <Routes>
        <Route path="/IniciarSesion" element={<LoginPage />} />
        <Route path='/' element={<Navigate to="/public/IniciarSesion" />} />
    </Routes>
    );
    
}

export default PublicRoutes;