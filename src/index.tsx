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
      textTransform: 'capitalize',
    },
    body1: {
      color: '#fff',
      lineHeight: '18.2px',
      letterSpacing: '0.1 px',
    },
    body2: {
      color: '#fff',
      lineHeight: '16.41px',
    },
    subtitle1: {
      color: '#A1A1AA',
      textTransform: 'none',
      lineHeight: '16.41px',
    },
    caption: {
      fontSize: 10,
      lineHeight: '11.72px',
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
