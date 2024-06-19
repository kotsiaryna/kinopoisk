import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Film from './pages/Film/Film.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { filmById } from './services/api.ts';
import ErrorElement from './pages/Film/ErrorElement/ErrorElement.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/film/:id',
    element: <Film />,
    loader: filmById,
    errorElement: <ErrorElement />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
