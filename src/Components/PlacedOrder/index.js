import React from 'react';
import bottomsImg from '../../assets/img/bottoms.jpeg';
import './style.css';

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
          <p>Order Placed</p> <p>13.1.1997</p>
        </div>
        <div className="placedOrderHeaderContent">
          <p>Total</p>
          <p>500</p>
        </div>
        <div className="placedOrderHeaderContent">
          <p>Order ID</p> <p>#123123123</p>
        </div>
      </div>
      <div className="placedOrderSubheader">
        <p>Delivered : </p>
        <p> 18.1.1997</p>
      </div>

      <div className="placedOrderItems">
        <img
          className="placedOrderItemsImg"
          src={bottomsImg}
          alt="bottomsImg"
        />
        <div className="placedOrderItems"></div>
      </div>
    </div>
  );
}

export default PlacedOrder;
