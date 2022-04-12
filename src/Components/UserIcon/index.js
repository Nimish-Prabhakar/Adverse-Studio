import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOutAction } from '../../Pages/SignIn/SignIn.actions';
import './style.css';

function UserIcon() {
  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate('/sign-in');
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(signOutAction());
    navigate('/');
    setAnchorEl(null);
  };

  return (
    <div className="userIconWrapper">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="userBtn"
      >
        <FaUser className={!isSignedIn ? 'userIcon' : 'userIconActive'} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isSignedIn ? (
          <>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default UserIcon;
