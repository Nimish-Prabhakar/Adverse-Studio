import React, { useState, useEffect } from 'react';
import SingleProduct from '../../Components/SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProductDetails } from './SingleProductPage.action';
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
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [productInfoFetched, setProductInfoFetched] = useState(false);

  useEffect(() => {
    setProductInfo(selectedProductInfo);
  }, [selectedProductInfo]);

  useEffect(() => {
    setProductInfoFetched(true);
    console.log('here', productInfo);
    setLoading(false);
  }, [productInfo]);

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
          colors_available={productInfo.colors_available}
          size_available={productInfo.size_available}
        />
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
}

export default SingleProductPage;
