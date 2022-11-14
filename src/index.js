import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
