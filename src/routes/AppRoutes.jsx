
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/DynamicFormPages/Home';
import About from '../pages/DynamicFormPages/About';
import FormCarPage from "../pages/DynamicFormPages/FormCardPage"
import PetForm from '../pages/DynamicFormPages/PetForm';

import FormDisplay from '../pages/DynamicFormPages/EditFormPage';

import CreateFormPage from '../pages/DynamicFormPages/CreateFormPage'
import CreateFormGroupPage from '../pages/DynamicFormPages/CreateFormGroupPage'
import CreateFormFieldPage from '../pages/DynamicFormPages/CreateFormFieldPage'
import FormResponsesDisplay from '../pages/DynamicFormPages/FormResponsePage'
import FilledFormSelector from '../pages/DynamicFormPages/FilledFormSelectorPage';
import CreateClientePage from '../pages/DynamicFormPages/ClientePages/CreateClientePage'
import MostrarClientePage from "../pages/DynamicFormPages/ClientePages/MostrarClientePage"
import CreateProductoPage from "../pages/DynamicFormPages/ProductoPages/CreateProductoPage";
import MostrarProductoPage from "../pages/DynamicFormPages/ProductoPages/MostrarProductoPage"
import CrearVentaPage from "../pages/DynamicFormPages/VentaPages/CrearVentaPages"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="form-page" element={<FormCarPage />} />
          <Route path="filled-form-page" element={<FilledFormSelector />} />
          <Route path='/form-display/:id' element={<FormDisplay />} />
          <Route path='/form-response-display/:id' element={<FormResponsesDisplay />} />
          <Route path='create-form-page' element={<CreateFormPage/>} />
          <Route path='create-form-group' element={<CreateFormGroupPage />} />
          <Route path='create-form-field' element={<CreateFormFieldPage />} />
          <Route path='create-client' element={<CreateClientePage />} />
          <Route path='mostrar-client' element={<MostrarClientePage />} />
          <Route path='create-product' element={<CreateProductoPage />} />
          <Route path='mostrar-product' element={<MostrarProductoPage />} />
          <Route path='create-venta' element={<CrearVentaPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
