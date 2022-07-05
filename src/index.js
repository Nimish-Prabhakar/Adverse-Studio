import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Nunito', 'Source Code Pro'],
  },
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
