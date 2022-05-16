import React from 'react';
import successOrder from '../../assets/img/successOrder.webp';
import Typography from '@mui/material/Typography';
import ColorButton from '../../Components/ColorButton';
import { useNavigate } from 'react-router-dom';
import './style.css';

const styles = {
  btn: {
    width: '350px',
    marginTop: '30px',
  },
};

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="orderSuccessWrapper">
      <div className="orderSuccessFlex">
        <img
          className="orderSuccessImg"
          src={successOrder}
          alt="successOrder"
        />
        <Typography variant="h4" gutterBottom component="div">
          Thank You For Your Purchase
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Your order number is : #123123123123
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          We'll email you an order confirmation with details and tracking info.
        </Typography>
        <ColorButton
          sx={styles.btn}
          onClick={() => navigate('/')}
          variant="contained"
        >
          Continue Shopping
        </ColorButton>
      </div>
    </div>
  );
}

export default OrderSuccess;
