import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './style.css';

function Cart() {
  const cartCount = useSelector(
    (state) => state.cartPageReducer.cartItemsCount
  );

  return (
    <div className="navCartWrapper">
      <p className="cartValue">{cartCount}</p>
      <AiOutlineShoppingCart className="cartIcon" />
    </div>
  );
}

export default Cart;
