import React, { useEffect, useState } from 'react';
import PreProductCatalog from '../../Components/PreProductCatalog';
import PreProductListing from '../../Components/PreProductListing';
import { useDispatch, useSelector } from 'react-redux';
import { womenPageCategories } from '../../constants/AppConstants';
import { getAllProductsWomenPage } from './WomenPage.actions';
import './WomenPage.style.css';

function WomenPage() {
  const dispatch = useDispatch();

  const allProductsData = useSelector(
    (state) => state.womenPageReducer.productDetails
  );
  const allCategories = useSelector(
    (state) => state.womenPageReducer.individualCategories
  );

  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    dispatch(getAllProductsWomenPage());
  }, [dispatch]);

  useEffect(() => {
    setProductData(allProductsData);
    setCategories(allCategories);
  }, [allProductsData, allCategories]);

  return (
    <div className="womenPageWrapper">
      <PreProductCatalog
        pageName="Women"
        pageCategories={womenPageCategories}
        displayImageLeft={productData.display_image_left}
        displayImageRight={productData.display_image_right}
      />
      {Object.entries(categories).map((val, index) => {
        const categoryName = val[0];
        const categoryProducts = val[1];
        return (
          <div id={categoryName}>
            <PreProductListing
              subCategoryName={categoryName}
              PageProductMinis={categoryProducts}
              key={categoryName}
            />
          </div>
        );
      })}
    </div>
  );
}

export default WomenPage;
