import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Pages/NavigationBar';
import HomePage from './Pages/HomePage';
import WomenPage from './Pages/WomenPage';
import SignInPage from './Pages/SignIn';
import SingleProductPage from './Pages/SingleProductPage';
import DeliveryDetailsPage from './Pages/DeliveryDetails';
import CartPage from './Pages/CartPage';
import Page404 from './Pages/404Page';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/deals" element={<SingleProductPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/deliveryDetails" element={<DeliveryDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
