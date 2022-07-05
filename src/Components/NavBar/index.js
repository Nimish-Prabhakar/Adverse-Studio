import React from 'react';
import { NavLink } from 'react-router-dom';
import NykaaLogo from '../../assets/img/fashion_demo.jpeg';
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.css';

function NavBar({ toggleMenuHandler, toggleSearch, searchDisplay }) {
  return (
    <>
      <div className="navBarWrapper">
        <div className="productLinkWrapper">
          <nav className="productLinkNav">
            <NavLink
              className="individualLinks"
              to="/women"
              activeClassName="active"
            >
              Women
            </NavLink>
            <NavLink
              className="individualLinks"
              to="/decor"
              activeClassName="active"
            >
              Decor
            </NavLink>
            <NavLink
              className="individualLinks"
              to="/kashmiri"
              activeClassName="active"
            >
              Kashmiri
            </NavLink>
            <NavLink
              className="individualLinks"
              to="/deals"
              activeClassName="active"
            >
              Deals
            </NavLink>
            <NavLink
              className="individualLinks"
              to="/furniture"
              activeClassName="active"
            >
              Furniture
            </NavLink>
          </nav>
        </div>
        <div className="navLogoWrapper">
          <NavLink to="/">
            <img className="navLogo" src={NykaaLogo} alt="nyka-logo" />
          </NavLink>
        </div>
        <div className="navIconsWrapper"></div>
      </div>
      <div className="mobileNavWrapper">
        <NavLink to="/">
          <img className="navLogoMobile" src={NykaaLogo} alt="nyka-logo" />
        </NavLink>
        <AiOutlineSearch />
        <AiOutlineHeart />

        <GiHamburgerMenu
          className="hamburgerMenu"
          onClick={toggleMenuHandler}
        />
      </div>
    </>
  );
}

export default NavBar;
