import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./privateRoutes/privateRoutes";
import MainLayout from "./components/MainLayout";
import LoginPage from "./layouts/publicLayouts/LoginPage";
// import LoginPage from "./pages/LoginPage";
// import MainLayout from "./components/layouts/MainLayout";
// import Productos from "./pages/Productos";
// import Clientes from "./pages/Clientes";
// import Ventas from "./pages/Ventas";
// import PrivateRoutes from "./routes/PrivateRoutes";

// Simula autenticación (puedes usar Redux o Context)
const isAuthenticated = !!localStorage.getItem("token");

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas Privadas */}
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route element={<MainLayout />}>
          {/* <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/ventas" element={<Ventas />} /> */}
        </Route>
      </Route>

      {/* Ruta por defecto */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  );
};

export default App;
