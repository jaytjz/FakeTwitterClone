import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import { useContext, createContext, useState } from 'react';

import Landing from './views/Landing.jsx';
import Timeline from './views/Timeline.jsx';

const GlobalContext = createContext();

export const useGlobal = () => {
  return useContext(GlobalContext);
};

const Router = () => {
  const [replyTo, setReplyTo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openTweetModal = (reply) => {
    setReplyTo(reply);
    setModalIsOpen(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/timeline',
      element: <Timeline />
    }
  ]);

  return (
    <GlobalContext.Provider value={{ replyTo, openTweetModal, modalIsOpen, setModalIsOpen }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
};

export default Router;