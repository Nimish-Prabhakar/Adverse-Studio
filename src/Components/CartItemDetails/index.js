import React from 'react';
import Kaftan from '../../assets/img/kaftan.jpeg';
import Typography from '@mui/material/Typography';
import WishlistIcon from '../WishlistIcon';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import './style.css';

function CartItemDetails({ image, name, price, size, color }) {
  return (
    <>
      <hr />
      <div className="CartItemDetailsWrapper">
        <div className="CartItemDetailsLeft">
          <img src={Kaftan} alt="Kaftan" className="CartItemDetailsLeftImg" />
          <div className="CartItemDetailsLeftFlex">
            <div className="CartItemDetailsLeftFlexUpperRow">
              <Typography variant="h6" gutterBottom component="div">
                Pink Kaftan
              </Typography>
              <AiOutlineHeart className="CartItemDetailsLeftFlexUpperRowIcons" />
              <RiDeleteBin6Line className="CartItemDetailsLeftFlexUpperRowIcons" />
            </div>
            <Typography variant="caption" display="block" gutterBottom>
              Size: M
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Color: Pink
            </Typography>
          </div>
        </div>
        <div className="CartItemDetailsRight">
          <Typography variant="h3" gutterBottom component="div">
            $200
          </Typography>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
