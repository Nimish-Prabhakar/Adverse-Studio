import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';
import MobileNav from '../../Components/NavBar/MobileNav';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = (e) => {
    setIsOpen((preValue) => {
      return !preValue;
    });
  };

  return (
    <>
      <NavBar toggleMenuHandler={toggleMenuHandler} />
      <MobileNav isOpen={isOpen} toggleMenuHandler={toggleMenuHandler} />
    </>
  );
}

export default NavigationBar;
