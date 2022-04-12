import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { BiUser, BiLockOpenAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import categoryRight from '../../assets/img/categoryRight.jpeg';
import signIn1 from '../../assets/img/signIn1.jpeg';
import signIn2 from '../../assets/img/signIn2.jpeg';
import signIn3 from '../../assets/img/signIn3.jpeg';
import signIn4 from '../../assets/img/signIn4.jpeg';
import signIn5 from '../../assets/img/signIn5.jpeg';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from './SignIn.actions';
import { useNavigate } from 'react-router-dom';
import { MdPassword } from 'react-icons/md';
import './style.css';

const styles = {
  typography: {
    width: '400px',
    padding: '10px 0 10px',
    fontSize: '1.3rem',
    marginTop: '20px',
  },
  button: {
    width: '250px',
    textTransform: 'none',
  },
};

function SignIn() {
  const [sectionSelected, setSectionSelected] = useState('signInBtn');

  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSectionSelect = (e) => {
    setSectionSelected(e.target.id);
    const newClass = e.target.className + ' selectedBtn';
    e.target.className = newClass;
  };

  useEffect(() => {
    const signInEl = document.getElementById('signInBtn');
    const signUpEl = document.getElementById('signUpBtn');
    if (signInEl.id === sectionSelected) {
      signUpEl.className = 'signInPagebtnToggleBoth';
    }
    if (signUpEl.id === sectionSelected) {
      signInEl.className = 'signInPagebtnToggleBoth';
    }
  }, [sectionSelected]);

  useEffect(() => {
    const signInEl = document.getElementById('signInBtn');
    const newClass = signInEl.className + ' selectedBtn';
    signInEl.className = newClass;
  }, []);

  const signInSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(signInAction());
    navigate('/');
  };

  return (
    <div className="signInPageWrapper">
      <div className="signInPageLeft">
        <div className="signInPagebtnToggle">
          <button
            id="signInBtn"
            onClick={handleSectionSelect}
            className="signInPagebtnToggleBoth"
          >
            Sign In
          </button>
          <button
            id="signUpBtn"
            onClick={handleSectionSelect}
            className="signInPagebtnToggleBoth"
          >
            Sign Up
          </button>
        </div>
        <form className="signInPageForm">
          <div className="signInPageTextfields">
            {sectionSelected === 'signUpBtn' && (
              <>
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="First Name"
                  autoComplete="off"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiUsers style={{ fontSize: '1.3rem' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="Last Name"
                  autoComplete="off"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiUsers style={{ fontSize: '1.3rem' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </>
            )}
            <TextField
              sx={styles.typography}
              id="input-with-icon-textfield"
              placeholder="Email Address"
              autoComplete="off"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiUser style={{ fontSize: '1.3rem' }} />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              sx={styles.typography}
              id="input-with-icon-textfield"
              placeholder="Password"
              autoComplete="off"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BiLockOpenAlt style={{ fontSize: '1.3rem' }} />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            {sectionSelected === 'signInBtn' && (
              <>
                <div className="signInBtn">
                  <Button
                    sx={styles.button}
                    variant="contained"
                    onClick={signInSubmitHandler}
                  >
                    Sign In
                  </Button>
                </div>
              </>
            )}
            {sectionSelected === 'signUpBtn' && (
              <>
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdPassword style={{ fontSize: '1.3rem' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <div className="signInBtn">
                  <Button sx={styles.button} variant="contained">
                    Sign Up
                  </Button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
      <div className="signInPageRight">
        <div class="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src={signIn1}
              alt="Gallery_new_image_1"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src={signIn2}
              alt="Gallery_new_image_2"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src={signIn5}
              alt="Gallery_new_image_3"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src={signIn3}
              alt="Gallery_new_image_4"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src={signIn4}
              alt="Gallery_new_image_5"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src={categoryRight}
              alt="Gallery_new_image_6"
              className="gallery__img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
