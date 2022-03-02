import React, { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { styled } from '@mui/material/styles';
import singleProductImage from '../../assets/img/singleProductImage.jpeg';
import singleProductImage2 from '../../assets/img/singleProductImage2.jpeg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  width: '400px',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

function SingleProduct() {
  const [wishlist, setWishlist] = useState({ color: 'black' });
  const [descriptionShow, setDescriptionShow] = useState(false);
  const [deliveryReturnShow, setDeliveryReturnShow] = useState(false);
  const [assistanceShow, setAssistanceShow] = useState(false);

  const wishlistHandler = (e) => {
    setWishlist({ color: 'red' });
  };

  const descriptionHandler = (e) => {
    setDescriptionShow((prevValue) => {
      return !prevValue;
    });
  };

  const deliveryReturnHandler = (e) => {
    setDeliveryReturnShow((prevValue) => {
      return !prevValue;
    });
  };

  const assistanceHandler = (e) => {
    setAssistanceShow((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div className="singleProductWrapper">
      <div className="singleProductLeft">
        <div className="singleProductLeftWrapper">
          <div className="wishlistInlineWrapper">
            <div className="wishlistInlineFlex">
              <Typography variant="caption" display="block" gutterBottom>
                Shirt
              </Typography>
              <Typography variant="h4" gutterBottom component="div">
                Angelina
              </Typography>
            </div>
            <BsFillHeartFill
              className="wishlistIconProduct"
              style={wishlist}
              onClick={wishlistHandler}
            />
          </div>
          <p>this is a tshirt yohooo yohooo</p>
          <div className="colorPickerWrapper">
            <Typography variant="subtitle2" gutterBottom component="div">
              Color
            </Typography>
            <div className="colorPickerFlex">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <Typography variant="subtitle2" gutterBottom component="div">
              Red
            </Typography>
          </div>
          <hr className="horizontalBreak" />
          <div className="sizePickerWrapper">
            <Typography variant="subtitle2" gutterBottom component="div">
              Size
            </Typography>
            <div className="sizePickerFlex">
              <span class="size">S</span>
              <span class="size">M</span>
              <span class="size">L</span>
            </div>
            <Typography
              style={{ fontFamily: 'sans-serif' }}
              variant="caption"
              gutterBottom
              component="div"
            >
              Size Chart
            </Typography>
          </div>
          <div className="singleProductAddBtn">
            <ColorButton size="large" variant="contained">
              Add to Cart - $100.00
            </ColorButton>
          </div>
          <div className="singleProductDescriptionWrapper">
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              style={{ cursor: 'pointer' }}
              onClick={descriptionHandler}
            >
              - Description
            </Typography>
            {descriptionShow && (
              <p className="descriptionText">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </p>
            )}
          </div>
          <div className="singleProductDescriptionWrapper">
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              style={{ cursor: 'pointer' }}
              onClick={deliveryReturnHandler}
            >
              - Delivery and returns
            </Typography>
            {deliveryReturnShow && (
              <p className="descriptionText">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </p>
            )}
          </div>
          <div className="singleProductDescriptionWrapper">
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              style={{ cursor: 'pointer' }}
              onClick={assistanceHandler}
            >
              - Assistance
            </Typography>
            {assistanceShow && (
              <p className="descriptionText">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="singleProductRight">
        <div className="corouselImageWrapper">
          <img
            className="carouselImage"
            src={singleProductImage}
            alt="singleProductImage"
          />
          <img
            className="carouselImage"
            src={singleProductImage2}
            alt="singleProductImage2"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
