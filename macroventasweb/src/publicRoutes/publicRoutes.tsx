import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../layouts/publicLayouts/LoginPage";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default PublicRoutes;
