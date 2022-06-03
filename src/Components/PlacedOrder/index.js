import React from 'react';
import Button from '@mui/material/Button';
import bottomsImg from '../../assets/img/bottoms.jpeg';
import { GiShoppingBag } from 'react-icons/gi';
import './style.css';

const styles = {
  btn: {
    backgroundColor: '#FFD814',
    color: 'black',
    textTransform: 'none',
    borderRadius: '8px',
    borderColor: '#FCD200',
    boxShadow: '0 2px 5px 0 rgb(213 217 217 / 50%)',
    '&:hover': {
      backgroundColor: '#F7CA00',
      boxShadow: '0 2px 5px 0 rgb(213 217 217 / 50%)',
      borderColor: '#F2C200',
    },
  },
};

function PlacedOrder({
  orderPlacedDate,
  orderDeliveredDate,
  orderId,
  orderInfo,
}) {
  return (
    <div className="placedOrderWrapper">
      <div className="placedOrderHeader">
        <div className="placedOrderHeaderContent">
          <p>Order Placed</p> <p style={{ marginTop: '5px' }}>13.1.1997</p>
        </div>
        <div className="placedOrderHeaderContent">
          <p>Total</p>
          <p style={{ marginTop: '5px' }}>500</p>
        </div>
        <div className="placedOrderHeaderContent">
          <p>Order ID</p> <p style={{ marginTop: '5px' }}>#123123123</p>
        </div>
      </div>
      <div className="placedOrderSubheader">
        <p>Delivered: </p> <p style={{ marginLeft: '10px' }}> 18.1.1997</p>
      </div>

      <div className="placedOrderItems">
        <img
          className="placedOrderItemsImg"
          src={bottomsImg}
          alt="bottomsImg"
        />
        <div className="placedOrderItemsDescription">
          <p style={{ marginBottom: '10px' }}>Cool Top</p>
          <p style={{ marginBottom: '10px' }}>Size: M</p>
          <p style={{ marginBottom: '25px' }}>Color: Red</p>
          <Button
            sx={styles.btn}
            variant="contained"
            size="small"
            startIcon={<GiShoppingBag />}
          >
            Buy it again
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlacedOrder;
