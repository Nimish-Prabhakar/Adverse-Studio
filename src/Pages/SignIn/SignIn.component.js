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
import { signInAction, signUpAction } from './SignIn.actions';
import { useNavigate } from 'react-router-dom';
import { MdPassword, MdAlternateEmail } from 'react-icons/md';
import Alert from '@mui/material/Alert';
import Loader from '../../Components/Loader';
import ForgotPasswordModal from './ForgotPasswordModal';
import { AiOutlinePhone } from 'react-icons/ai';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sectionSelected, setSectionSelected] = useState('signInBtn');

  const [signUpUserDetails, setSignUpUserDetails] = useState({
    email_id: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    phone_number: '',
  });

  const [signInUserDetails, setSignInUserDetails] = useState({
    email_id: '',
    password: '',
  });

  const [serverError, setServerError] = useState('');

  const [emailValidError, setEmailValidError] = useState(false);

  const [emptyEmailError, setEmptyEmailError] = useState(false);
  const [emptyFnError, setEmptyFnError] = useState(false);
  const [emptyLnError, setEmptyLnError] = useState(false);
  const [emptyPhone, setEmptyPhone] = useState(false);
  const [emptyPasswordError, setEmptyPasswordError] = useState(false);
  const [emptyConfirmPassError, setEmptyConfirmPassError] = useState(false);
  const [confirmPassMatch, setConfirmPassMatch] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const [loader, setLoader] = useState(false);

  const signInstatus = useSelector(
    (state) => state.signInPageReducer.signInstatus
  );

  const signUpStatus = useSelector(
    (state) => state.signInPageReducer.signUpStatus
  );

  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);

  const serverSideError = useSelector((state) => state.signInPageReducer.error);

  const signInChangeHandler = (e) => {
    setSignInUserDetails((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const signUpChangeHandler = (e) => {
    setSignUpUserDetails((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSectionSelect = (e) => {
    setSectionSelected(e.target.id);
    const newClass = e.target.className + ' selectedBtn';
    e.target.className = newClass;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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

    if (signInUserDetails.email_id.length === 0) {
      setEmptyEmailError(true);
      return;
    } else {
      setEmptyEmailError(false);
    }

    const emailValidation = validateEmail(signInUserDetails.email_id);

    if (!emailValidation) {
      setEmailValidError(true);
      return;
    } else {
      setEmailValidError(false);
    }

    if (signInUserDetails.password.length === 0) {
      setEmptyPasswordError(true);
      return;
    } else {
      setEmptyPasswordError(false);
    }

    const userDetailsSignIn = {
      email_id: signInUserDetails.email_id,
      password: signInUserDetails.password,
    };

    setLoader(true);

    dispatch(signInAction(userDetailsSignIn));
  };

  useEffect(() => {
    if (signInstatus || signUpStatus) {
      if (signInstatus) localStorage.setItem('isSignedIn', signInstatus);
      if (signUpStatus) localStorage.setItem('isSignedIn', signUpStatus);
      setLoader(false);
      navigate('/');
    }
  }, [signInstatus, signUpStatus, isSignedIn, navigate]);

  const signUpSubmitHandler = (e) => {
    e.preventDefault();

    if (signUpUserDetails.first_name.length === 0) {
      setEmptyFnError(true);
      return;
    } else {
      setEmptyFnError(false);
    }

    if (signUpUserDetails.last_name.length === 0) {
      setEmptyLnError(true);
      return;
    } else {
      setEmptyLnError(false);
    }

    if (signUpUserDetails.phone_number.length === 0) {
      setEmptyPhone(true);
      return;
    } else {
      setEmptyPhone(false);
    }

    if (signUpUserDetails.email_id.length === 0) {
      setEmptyEmailError(true);
      return;
    } else {
      setEmptyEmailError(false);
    }

    const emailValidation = validateEmail(signUpUserDetails.email_id);

    if (!emailValidation) {
      setEmailValidError(true);
      return;
    } else {
      setEmailValidError(false);
    }

    if (signUpUserDetails.password.length === 0) {
      setEmptyPasswordError(true);
      return;
    } else {
      setEmptyPasswordError(false);
    }

    if (signUpUserDetails.password.length < 7) {
      setPasswordLengthError(true);
      return;
    } else {
      setPasswordLengthError(false);
    }

    if (signUpUserDetails.confirm_password.length === 0) {
      setEmptyConfirmPassError(true);
      return;
    } else {
      setEmptyConfirmPassError(false);
    }

    if (signUpUserDetails.password !== signUpUserDetails.confirm_password) {
      setConfirmPassMatch(true);
      return;
    } else {
      setConfirmPassMatch(false);
    }

    const userDetailsSignUp = {
      first_name: signUpUserDetails.first_name,
      last_name: signUpUserDetails.last_name,
      email_id: signUpUserDetails.email_id,
      password: signUpUserDetails.password,
      phone_number: signUpUserDetails.phone_number,
    };

    setLoader(true);

    dispatch(signUpAction(userDetailsSignUp));
  };

  useEffect(() => {
    setServerError(serverSideError);
    setLoader(false);
  }, [serverSideError]);

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
            {emailValidError && (
              <Alert severity="error">Please enter a valid email address</Alert>
            )}
            {emptyEmailError && (
              <Alert severity="error">Please enter your email address</Alert>
            )}
            {emptyFnError && (
              <Alert severity="error">Please enter your first namee</Alert>
            )}
            {emptyLnError && (
              <Alert severity="error">Please enter your last name</Alert>
            )}
            {emptyPhone && (
              <Alert severity="error">Please enter your phone number</Alert>
            )}
            {emptyPasswordError && (
              <Alert severity="error">Please enter your password</Alert>
            )}
            {passwordLengthError && (
              <Alert severity="error">
                Passowrd should be atleast 8 characters long
              </Alert>
            )}
            {emptyConfirmPassError && (
              <Alert severity="error">Please confirm your password</Alert>
            )}
            {confirmPassMatch && (
              <Alert severity="error">
                Confirm password does not match your password
              </Alert>
            )}
            {serverError.length > 0 && (
              <Alert severity="error">{serverError}</Alert>
            )}
            {loader && <Loader />}
            {sectionSelected === 'signUpBtn' && (
              <>
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="First Name"
                  autoComplete="off"
                  type="text"
                  name="first_name"
                  value={signUpUserDetails.first_name}
                  onChange={signUpChangeHandler}
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
                  placeholder="Last Name"
                  autoComplete="off"
                  type="text"
                  name="last_name"
                  value={signUpUserDetails.last_name}
                  onChange={signUpChangeHandler}
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
                  placeholder="Phone Number"
                  autoComplete="off"
                  type="text"
                  name="phone_number"
                  value={signUpUserDetails.phone_number}
                  onChange={signUpChangeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AiOutlinePhone style={{ fontSize: '1.3rem' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="Email Address"
                  autoComplete="off"
                  type="email"
                  name="email_id"
                  value={signUpUserDetails.email_id}
                  onChange={signUpChangeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdAlternateEmail style={{ fontSize: '1.3rem' }} />
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
                  name="password"
                  value={signUpUserDetails.password}
                  onChange={signUpChangeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiLockOpenAlt style={{ fontSize: '1.3rem' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  type="password"
                  name="confirm_password"
                  value={signUpUserDetails.confirm_password}
                  onChange={signUpChangeHandler}
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
                  <Button
                    onClick={signUpSubmitHandler}
                    sx={styles.button}
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                </div>
              </>
            )}
            {sectionSelected === 'signInBtn' && (
              <>
                <TextField
                  sx={styles.typography}
                  id="input-with-icon-textfield"
                  placeholder="Email Address"
                  autoComplete="off"
                  type="email"
                  name="email_id"
                  value={signInUserDetails.email_id}
                  onChange={signInChangeHandler}
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
                  name="password"
                  value={signInUserDetails.password}
                  onChange={signInChangeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiLockOpenAlt style={{ fontSize: '1.3rem' }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <ForgotPasswordModal />
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
