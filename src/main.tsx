import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
);
