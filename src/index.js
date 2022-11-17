import React from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
