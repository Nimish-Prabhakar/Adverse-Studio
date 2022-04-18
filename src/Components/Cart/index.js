import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

function Cart() {
  const cartCount = useSelector(
    (state) => state.cartPageReducer.cartItemsCount
  );

  return (
    <div className="navCartWrapper">
      <Link className="cartLinkNav" to="/cart">
        <AiOutlineShoppingCart className="cartIcon" />
        <p>{`(${cartCount})`}</p>
      </Link>
    </div>
  );
}

export default Cart;
