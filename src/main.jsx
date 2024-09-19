import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { userContext } from 'react';
import ReactDOM from 'react-dom/client';

const contextValue = {
  username: 'Mango',
  isLoggedIn: true,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <userContext.Provider value={contextValue}>
    <StrictMode>
      <App />
    </StrictMode>
  </userContext.Provider>
);
