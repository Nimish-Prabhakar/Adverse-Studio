import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Pages/NavigationBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './Pages/HomePage';
import WomenPage from './Pages/WomenPage';
import SingleProductPage from './Pages/SingleProductPage';
import { getWomenPageProducts } from './redux/reducers/womenPageReducer';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Nunito', 'Source Code Pro'],
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomenPageProducts());
  }, [dispatch]);

  const womenPageProducts = useSelector(
    (state) => state.womenPage.womenPageProducts
  );

  console.log('womenPageProducts', womenPageProducts[0].json);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/deals" element={<SingleProductPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
