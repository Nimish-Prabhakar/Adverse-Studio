import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// web.cjs is required for IE11 support
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

function CartModal({ sx }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ColorButton sx={sx} variant="contained" onClick={handleOpen}>
        Buy
      </ColorButton>
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
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Would you like to
              <span style={{ marginLeft: '10px' }}>
                <Link
                  style={{ textDecoration: 'none', color: 'darkred' }}
                  to="/sign-in"
                >
                  Sign Up
                </Link>
              </span>{' '}
              ?
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              <Link
                style={{
                  textDecoration: 'none',
                  fontSize: '17px',
                  borderBottom: '1px solid black',
                }}
                to="/deliveryDetails"
              >
                Or continue as a guest -->
              </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CartModal;
