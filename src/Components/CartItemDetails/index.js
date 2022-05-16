import React from 'react';
import Typography from '@mui/material/Typography';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import './style.css';

function CartItemDetails({
  image,
  name,
  price,
  size,
  color,
  description,
  deleteHandler,
}) {
  return (
    <>
      <hr />
      <div className="CartItemDetailsWrapper">
        <div className="CartItemDetailsLeft">
          <img
            src={image}
            alt={description}
            className="CartItemDetailsLeftImg"
          />
          <div className="CartItemDetailsLeftFlex">
            <div className="CartItemDetailsLeftFlexUpperRow">
              <Typography variant="h6" gutterBottom component="div">
                {name}
              </Typography>
              <AiOutlineHeart className="CartItemDetailsLeftFlexUpperRowIcons" />
              <RiDeleteBin6Line
                className="CartItemDetailsLeftFlexUpperRowIcons"
                onClick={deleteHandler}
              />
            </div>
            <Typography variant="caption" display="block" gutterBottom>
              Size: {size}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Color: {color}
            </Typography>
          </div>
        </div>
        <div className="CartItemDetailsRight">
          <Typography variant="h3" gutterBottom component="div">
            &#8377;{price}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
