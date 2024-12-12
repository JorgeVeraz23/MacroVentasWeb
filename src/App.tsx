import './style/App.css';
import './style/nicostyle.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/LoginPage';
import PublicRoutes from './routers/routersComponent/PublicRoutes/publicRoute';
import PrivateRoutes from './routers/routersComponent/PrivateRoutes/privateRoute';
import NotFoundPage from './components/NotFoundPage';
import { Provider } from 'react-redux';
import { store } from './app/redux/store/store';

function App() {
  const isAuthenticated = !!localStorage.getItem('Token'); // Verifica si hay un token en el localStorage
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Redirigir a rutas privadas o públicas según el estado de autenticación */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/private/Inicio" /> : <Navigate to="/public/IniciarSesion" />
            }
          />
          {/* Rutas públicas */}
          <Route path="/public/*" element={<PublicRoutes />} />
          {/* Rutas privadas */}
          <Route path="/private/*" element={<PrivateRoutes />} />
          {/* Ruta para manejar rutas no encontradas */}
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
