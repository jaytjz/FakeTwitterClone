import ReactDOM from 'react-dom/client';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import './index.css';
import Router from './Router.jsx';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider store={store}>
    <Router />
  </AuthProvider>
);