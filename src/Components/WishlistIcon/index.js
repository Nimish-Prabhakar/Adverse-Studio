import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './style.css';

function WishlistIcon({ size }) {
  const navigate = useNavigate();

  const [cssClass, setCssClass] = useState('wishListIcon');

  const onClickHandler = (e) => {
    setCssClass('wishListIconSelected');
  };

  return (
    <div className="wishListWrapper">
      <AiFillHeart
        id="wishListIcon"
        className={cssClass}
        style={{ fontSize: size }}
        onClick={onClickHandler}
      />
    </div>
  );
}

export default WishlistIcon;
