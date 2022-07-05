import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Pages/NavigationBar';
import HomePage from './Pages/HomePage';
import WomenPage from './Pages/WomenPage';
import SingleProductPage from './Pages/SingleProductPage';
import Page404 from './Pages/404Page';
import axios from 'axios';
import addIP from './services/addIPAdress.service';

function App() {
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res.data);

    addIP(res.data.IPv4, res.data.country_name, res.data.state);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/deals" element={<SingleProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
