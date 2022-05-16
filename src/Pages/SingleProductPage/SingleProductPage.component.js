import React, { useState, useEffect } from 'react';
import SingleProduct from '../../Components/SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProductDetailsToCart,
  getSingleProductDetails,
} from './SingleProductPage.action';
import { addCartItems } from '../CartPage/CartPage.actions';
import Loader from '../../Components/Loader';
import './SingleProductPage.style.css';

function SingleProductPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProductDetails(9));
  }, [dispatch]);

  const selectedProductInfo = useSelector(
    (state) => state.singleProductPageReducer.productInfo
  );
  const avaialableColors = useSelector(
    (state) => state.singleProductPageReducer.colorsAvailable
  );
  const isSignedIn = useSelector((state) => state.signInPageReducer.isSignedIn);

  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [productInfoFetched, setProductInfoFetched] = useState(false);
  const [colorSizes, setColorSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    setProductInfo(selectedProductInfo);
    setColorSizes(selectedProductInfo.sizes);
  }, [selectedProductInfo]);

  useEffect(() => {
    setProductInfoFetched(true);
    setLoading(false);
  }, [productInfo]);

  const colorSizeHandler = (color) => {
    setColorSizes(productInfo.colors_and_size[color]);
    setSelectedColor(color);
  };

  const sizeSelectHandler = (size) => {
    setSelectedSize(size);
  };

  const cartItemSubmitHandler = (e) => {
    e.preventDefault();
    const cartItems = {
      product_id: productInfo.product_id,
      color: selectedColor.toUpperCase(),
      size: selectedSize,
      quantity: 1,
    };
    if (isSignedIn) {
      dispatch(addCartItems(5, cartItems));
    } else {
      dispatch(addProductDetailsToCart(cartItems));
    }
  };

  return (
    <div className="SingleProductPageWrapper">
      {productInfoFetched ? (
        <SingleProduct
          cost={productInfo.cost}
          description={productInfo.description}
          product_catalogue_category_name={
            productInfo.product_catalogue_category_name
          }
          product_name={productInfo.product_name}
          colors_available={avaialableColors}
          size_available={colorSizes}
          userSelectedColor={colorSizeHandler}
          userSelectedSize={sizeSelectHandler}
          submitHandler={cartItemSubmitHandler}
        />
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
}

export default SingleProductPage;
