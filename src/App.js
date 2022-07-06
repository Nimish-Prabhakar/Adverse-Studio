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
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('http://lumtest.com/myip.json');
    setIP(res.data.ip);
    addIP(res.data.ip, res.data.country, res.data.geo.city);
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
          <Route path="/women" element={<WomenPage getIp={ip} />} />
          <Route path="/deals" element={<SingleProductPage getIp={ip} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
