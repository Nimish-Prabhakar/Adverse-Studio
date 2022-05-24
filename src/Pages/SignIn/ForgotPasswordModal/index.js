import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import ColorButton from '../../../Components/ColorButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import './style.css';

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  btn: {
    color: 'white',
    marginTop: '10px',
    width: '60%',
  },
};

function ForgotPasswordModal({ sx }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [borderColor, setBordorColor] = useState('');

  const confirmEmailHandler = (e) => {
    setConfirmEmail(e.target.value);
  };

  const passwordResetHandler = (e) => {
    if (confirmEmail === '') {
      setBordorColor('blankInput');
      return;
    }
    setEmailSent(true);
  };

  useEffect(() => {
    if (open === false) {
      setEmailSent(false);
      setBordorColor('');
    }
  }, [open]);

  return (
    <div className="ForgotPasswordModalWrapper">
      <p className="ForgotPasswordModalText" onClick={handleOpen}>
        Forgot password?
      </p>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style.box}>
            <div className="ForgotPasswordModalFlex">
              {!emailSent && (
                <>
                  <Typography variant="h5" gutterBottom component="div">
                    Reset Your Password
                  </Typography>
                  <p>Enter your registered email address.</p>
                  <input
                    className={`ForgotPasswordModalInput ${borderColor}`}
                    value={confirmEmail}
                    onChange={confirmEmailHandler}
                    placeholder="E-mail"
                    type="email"
                  ></input>
                  <ColorButton
                    type="submit"
                    onClick={passwordResetHandler}
                    sx={style.btn}
                  >
                    Continue
                  </ColorButton>
                </>
              )}
              {emailSent && (
                <>
                  <AiFillCheckCircle
                    style={{ color: 'green', height: '50px', width: '50px' }}
                  />
                  <p style={{ marginTop: '20px' }}>
                    A confirmation mail has been sent to your email address.
                  </p>
                </>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ForgotPasswordModal;
