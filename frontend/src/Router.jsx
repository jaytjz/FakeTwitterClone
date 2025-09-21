import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './views/Landing.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;