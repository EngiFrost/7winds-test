import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ThemeProvider } from '@mui/system';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#A1A1AA',
    },
  },
  typography: {
    allVariants: {
      fontSize: 14,
      color: '#fff',
    },

    body1: {
      lineHeight: '18.2px',
      letterSpacing: '0.1 px',
    },
    body2: {
      lineHeight: '16.41px',
    },
    button: {
      textTransform: 'capitalize',
    },
    caption: {
      color: '#A1A1AA',
      fontSize: 10,
      lineHeight: '11.72px',
    },
    h2: {
      color: '#fff',
      fontSize: 18,
      lineHeight: '21.09px',
    },
    subtitle1: {
      color: '#A1A1AA',
      lineHeight: '16.41px',
    },
    subtitle2: {
      color: '#A1A1AA',
      fontSize: 18,
      lineHeight: '21.09px',
    },
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
