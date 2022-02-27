import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Pages/NavigationBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './Pages/HomePage';
import WomenPage from './Pages/WomenPage';
import SingleProductPage from './Pages/SingleProductPage';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Nunito', 'Source Code Pro'],
  },
});

function App() {
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
