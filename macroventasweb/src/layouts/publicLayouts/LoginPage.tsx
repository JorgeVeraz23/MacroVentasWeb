import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/actions/authActions"; // Acción de Redux
// import { RootState, AppDispatch } from "../redux/store";

const LoginPage: React.FC = () => {
  const [correo, setCorreo] = useState<string>("");
  const [contrasenia, setContrasenia] = useState<string>("");
  const [localError, setLocalError] = useState<string | null>(null);

//   const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

//   // Obtener estado de Redux
//   const { isAuthenticated, error, loading } = useSelector(
//     (state: RootState) => state.auth
//   );

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Llamar a la acción de Redux para iniciar sesión
//       await dispatch(loginUser({ correo, contrasenia }) as any);

//       // Redirigir al dashboard si se autentica correctamente
//       if (isAuthenticated) {
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       setLocalError("Error al iniciar sesión, intenta nuevamente.");
//     }
//   };

  return (
    <></>
    // <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
    //   <h2>Iniciar Sesión</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div style={{ marginBottom: "1rem" }}>
    //       <label>Correo:</label>
    //       <input
    //         type="email"
    //         value={correo}
    //         onChange={(e) => setCorreo(e.target.value)}
    //         placeholder="correo@ejemplo.com"
    //         required
    //       />
    //     </div>
    //     <div style={{ marginBottom: "1rem" }}>
    //       <label>Contraseña:</label>
    //       <input
    //         type="password"
    //         value={contrasenia}
    //         onChange={(e) => setContrasenia(e.target.value)}
    //         placeholder="********"
    //         required
    //       />
    //     </div>
    //     <button type="submit" disabled={loading} style={{ marginTop: "1rem" }}>
    //       {loading ? "Cargando..." : "Iniciar Sesión"}
    //     </button>
    //     {localError && <p style={{ color: "red" }}>{localError}</p>}
    //     {error && <p style={{ color: "red" }}>{error}</p>}
    //   </form>
    // </div>
  );
};

export default LoginPage;
