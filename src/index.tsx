import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = React.lazy(() => import('./App'));
const Form20230901 = React.lazy(() => import('./pages/20230901'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.Suspense fallback={<>...</>}>
        <App />
      </React.Suspense>
    ),
  },
  {
    path: '/20230901',
    element: (
      <React.Suspense fallback={<>...</>}>
        <Form20230901 />
      </React.Suspense>
    ),
  },
  {
    path: '*',
    element: <div>oops! not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
