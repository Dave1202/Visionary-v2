import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Pagina_Principal from '../pages/Pagina_Principal';
import Tecnologia from '../pages/Tecnologia';
import Contacto from '../pages/Contacto';
import Equipo from '../pages/Equipo';
import Login from '../pages/Login';
import Editar_perfil from "../components/Editar_perfil";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Pagina_Principal /> },
      { path: 'tecnologia', element: <Tecnologia /> },
      { path: 'contacto', element: <Contacto /> },
      { path: 'equipo', element: <Equipo /> },
      { path: 'login', element: <Login /> },
      { path: 'editar-perfil', element: <Editar_perfil /> }  // sin espacios
    ]
  }
]);
