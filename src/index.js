import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor, sagaMiddleware } from './store/ConfigureStore';
import rootSaga from './store/RootSaga';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

sagaMiddleware.run(rootSaga);

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Nunito', 'Source Code Pro'],
  },
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
