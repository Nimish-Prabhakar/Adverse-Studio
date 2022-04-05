import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Pages/NavigationBar';
import HomePage from './Pages/HomePage';
import WomenPage from './Pages/WomenPage';
import SingleProductPage from './Pages/SingleProductPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/deals" element={<SingleProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
