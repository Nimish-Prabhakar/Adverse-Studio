import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Pages/NavigationBar';
import HomePage from './Pages/HomePage';
import WomenPage from './Pages/WomenPage';
import SignInPage from './Pages/SignIn';
import SingleProductPage from './Pages/SingleProductPage';
import DeliveryDetailsPage from './Pages/DeliveryDetails';
import CartPage from './Pages/CartPage';
import { KaftansPage, TopsPage } from './Pages/WomenCollectionPages';
import Page404 from './Pages/404Page';
import OrderSuccess from './Pages/OrderSuccessPage';
import UserAccount from './Pages/UserAccountPage';
import PreviousOrdersPage from './Pages/PreviousOrdersPage';
import ScrollToTop from './utils/ScrollToTop';
import axios from 'axios';

function App() {
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  useEffect(() => {
    console.log('ip address is', ip);
  }, [ip]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/deals" element={<SingleProductPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/delivery-details" element={<DeliveryDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/kaftans" element={<KaftansPage />} />
            <Route path="/tops" element={<TopsPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/previous-orders" element={<PreviousOrdersPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
