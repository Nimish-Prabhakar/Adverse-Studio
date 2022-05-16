import React, { useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { styled } from '@mui/material/styles';
import singleProductImage from '../../assets/img/singleProductImage.jpeg';
import singleProductImage2 from '../../assets/img/singleProductImage2.jpeg';
import { updateCartCountIncrement } from '../../Pages/CartPage/CartPage.actions';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './style.css';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  width: '400px',
  '&:hover': {
    backgroundColor: '#303030',
  },
}));

function SingleProduct({
  cost,
  colors_available = [],
  description,
  image_urls,
  product_catalogue_category_name,
  product_id,
  product_name,
  size_available = [],
  userSelectedColor,
  userSelectedSize,
  submitHandler,
}) {
  const dispatch = useDispatch();

  const [wishlist, setWishlist] = useState({ color: 'black' });
  const [descriptionShow, setDescriptionShow] = useState(false);
  const [deliveryReturnShow, setDeliveryReturnShow] = useState(false);
  const [assistanceShow, setAssistanceShow] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [opacity, setOpcaity] = useState('');
  const [itemAddedCart, setItemAddedCart] = useState(false);

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

  const colorSelectHandler = (color) => {
    setSelectedColor(color);
    userSelectedColor(color);
  };

  const sizeSelectHandler = (size) => {
    setSelectedSize(size);
    userSelectedSize(size);
  };

  const cartHandler = () => {
    dispatch(updateCartCountIncrement());
    setItemAddedCart(true);
    setTimeout(() => {
      setItemAddedCart(false);
    }, 3000);
  };

  return (
    <>
      {itemAddedCart && (
        <div className="alertMessages">
          <Alert variant="filled" severity="success">
            Product added successfully
          </Alert>
        </div>
      )}
      <div className="singleProductWrapper">
        <div className="singleProductLeft">
          <div className="singleProductLeftWrapper">
            <div className="wishlistInlineWrapper">
              <div className="wishlistInlineFlex">
                <Typography variant="caption" display="block" gutterBottom>
                  {product_catalogue_category_name}
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                  {product_name}
                </Typography>
              </div>
              <BsFillHeartFill
                className="wishlistIconProduct"
                style={wishlist}
                onClick={wishlistHandler}
              />
            </div>
            <p>{description}</p>
            <div className="colorPickerWrapper">
              <Typography variant="subtitle2" gutterBottom component="div">
                Color
              </Typography>
              <div className="colorPickerFlex">
                {colors_available.map((color) => {
                  return (
                    <span
                      key={product_id}
                      className="dot"
                      style={{ color: color, backgroundColor: color }}
                      onClick={() => colorSelectHandler(color)}
                    ></span>
                  );
                })}
              </div>
              <Typography variant="subtitle2" gutterBottom component="div">
                {selectedColor}
              </Typography>
            </div>
            <hr className="horizontalBreak" />
            <div className="sizePickerWrapper">
              <Typography variant="subtitle2" gutterBottom component="div">
                Size
              </Typography>
              <div className="sizePickerFlex">
                {size_available.map((size, index) => {
                  return (
                    <span
                      key={index}
                      className={`${'size' + ' ' + opacity}`}
                      onClick={() => sizeSelectHandler(size)}
                    >
                      {size}
                    </span>
                  );
                })}
              </div>
              <Typography
                style={{ fontFamily: 'sans-serif' }}
                variant="caption"
                gutterBottom
                component="div"
              >
                {selectedSize}
              </Typography>
            </div>
            <div className="singleProductAddBtn">
              <ColorButton
                size="large"
                variant="contained"
                onClick={submitHandler}
              >
                Add to Cart - ${cost}
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
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
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
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
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
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="singleProductRight">
          <Carousel
            centerMode={true}
            centerSlidePercentage="50"
            showStatus={false}
          >
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
            <img
              className="carouselImage"
              src={singleProductImage2}
              alt="singleProductImage2"
            />
            <img
              className="carouselImage"
              src={singleProductImage2}
              alt="singleProductImage2"
            />
            <img
              className="carouselImage"
              src={singleProductImage2}
              alt="singleProductImage2"
            />
            <img
              className="carouselImage"
              src={singleProductImage2}
              alt="singleProductImage2"
            />
            <img
              className="carouselImage"
              src={singleProductImage2}
              alt="singleProductImage2"
            />
            <img
              className="carouselImage"
              src={singleProductImage2}
              alt="singleProductImage2"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
