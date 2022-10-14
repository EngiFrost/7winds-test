import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ThemeProvider } from '@mui/system';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({ // TODO: make white a primary color!
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#A1A1AA',
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
