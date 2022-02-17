import React from 'react';
import { FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';

function MobileNav({ isOpen, toggleMenuHandler }) {
  return (
    <aside
      style={{ opacity: isOpen ? '100%' : '0', top: isOpen ? '0' : '-100%' }}
      className="sideBarContainer"
    >
      <div className="icon">
        <FaTimes className="closeIcon" onClick={toggleMenuHandler} />
      </div>
      <div className="sideBarWrapper">
        <ul className="sideBarMenu">
          <Link className="sideBarLink" to="/women" onClick={toggleMenuHandler}>
            Women
          </Link>
          <Link className="sideBarLink" to="/decor" onClick={toggleMenuHandler}>
            Decor
          </Link>
          <Link
            className="sideBarLink"
            to="/kashmiri"
            onClick={toggleMenuHandler}
          >
            Kashmiri
          </Link>
          <Link className="sideBarLink" to="/deals" onClick={toggleMenuHandler}>
            Deals
          </Link>
          <Link
            className="sideBarLink"
            to="/signup"
            onClick={toggleMenuHandler}
          >
            <FaUser className="userProfileLogo" />
            <span className="signInSpan">Sign In</span>
          </Link>
        </ul>
      </div>
    </aside>
  );
}

export default MobileNav;
