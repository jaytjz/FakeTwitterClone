import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './views/Landing.jsx';
import Timeline from './views/Timeline.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Timeline />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;