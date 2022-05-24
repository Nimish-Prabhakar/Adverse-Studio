import React from 'react';
import { NavLink } from 'react-router-dom';
import NykaaLogo from '../../assets/img/Nykaa_Logo.png';
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Search from '../../Components/Search';
import Cart from '../Cart';
import UserIcon from '../UserIcon';
import WishlistIcon from '../WishlistIcon';
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
        <div className="navIconsWrapper">
          <div className="iconNav">
            <Search />
            <UserIcon />
            <WishlistIcon size="25px" />
            <Cart />
          </div>
        </div>
      </div>
      <div className="mobileNavWrapper">
        <NavLink to="/">
          <img className="navLogoMobile" src={NykaaLogo} alt="nyka-logo" />
        </NavLink>
        <AiOutlineSearch />
        <AiOutlineHeart />
        <Cart />
        <GiHamburgerMenu
          className="hamburgerMenu"
          onClick={toggleMenuHandler}
        />
      </div>
    </>
  );
}

export default NavBar;
