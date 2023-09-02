import React from 'react';
import './App.scss';
import ShipsList from './pages/ships-list/ships-list';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShipDetail from './components/ship-detail/ship-detail';
import NotFound from './pages/not-found/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ShipsList />,
  },
  {
    path: '/ship/:id',
    element: <ShipDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
