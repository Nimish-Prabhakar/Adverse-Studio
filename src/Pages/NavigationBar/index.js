import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';
import MobileNav from '../../Components/NavBar/MobileNav';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);

  const toggleMenuHandler = (e) => {
    setIsOpen((preValue) => {
      return !preValue;
    });
  };

  const toggleSearch = (e) => {
    setSearchDisplay((preValue) => {
      return !preValue;
    });
  };

  return (
    <>
      <NavBar
        toggleMenuHandler={toggleMenuHandler}
        toggleSearch={toggleSearch}
        searchDisplay={searchDisplay}
      />
      <MobileNav isOpen={isOpen} toggleMenuHandler={toggleMenuHandler} />
    </>
  );
}

export default NavigationBar;
