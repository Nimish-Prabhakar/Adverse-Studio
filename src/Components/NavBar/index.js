import React from 'react';
import { Link } from 'react-router-dom';
import NykaaLogo from '../../assets/img/Nykaa_Logo.png';
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { IoBagOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Search from '../../Components/Search';
import './style.css';

function NavBar({ toggleMenuHandler, toggleSearch, searchDisplay }) {
  return (
    <>
      <div className="navBarWrapper">
        <div className="productLinkWrapper">
          <nav className="productLinkNav">
            <Link className="individualLinks" to="/women">
              Women
            </Link>
            <Link className="individualLinks" to="/decor">
              Decor
            </Link>
            <Link className="individualLinks" to="/kashmiri">
              Kashmiri
            </Link>
            <Link className="individualLinks" to="/deals">
              Deals
            </Link>
          </nav>
        </div>
        <div className="navLogoWrapper">
          <Link to="/">
            <img className="navLogo" src={NykaaLogo} alt="nyka-logo" />
          </Link>
        </div>
        <div className="navIconsWrapper">
          <div className="iconNav">
            <AiOutlineUser className="navIcons user" />
            <AiOutlineHeart className="navIcons heart" />
            <IoBagOutline className="navIcons cart" />
            <Search />
          </div>
        </div>
      </div>
      <div className="mobileNavWrapper">
        <Link to="/">
          <img className="navLogoMobile" src={NykaaLogo} alt="nyka-logo" />
        </Link>
        <AiOutlineSearch />
        <AiOutlineHeart />
        <IoBagOutline />
        <GiHamburgerMenu
          className="hamburgerMenu"
          onClick={toggleMenuHandler}
        />
      </div>
    </>
  );
}

export default NavBar;
