import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import rootSaga from './store/RootSaga';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const store = configureStore();

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Nunito', 'Source Code Pro'],
  },
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
