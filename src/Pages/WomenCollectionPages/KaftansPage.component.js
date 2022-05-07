import { Typography } from '@mui/material';
import React from 'react';
import ProductGallery from '../../Components/ProductGallery';
import CategorySort from '../../Components/CategorySort';
import {
  colorCategory,
  sizeCategory,
  priceCategory,
  sleeveLengthCategory,
} from '../../constants/AppConstants';
import './style.css';

const styles = {
  header: {
    marginTop: '50px',
    marginBottom: '30px',
  },
};

const colors = ['Red', 'Blue', 'Green'];

function KaftansPage() {
  const sortedValue = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="womenCollectionPagesWrapper">
        <div className="womenCollectionPagesHeader">
          <Typography
            sx={styles.header}
            variant="h2"
            gutterBottom
            component="div"
          >
            Kaftans
          </Typography>
        </div>
        <div className="womenCollectionPagesSortFlexWrapper">
          <div className="womenCollectionPagesSortFlex">
            <CategorySort
              title="Sleeve Length"
              options={sleeveLengthCategory}
              sortedValue={sortedValue}
            />
            <CategorySort
              title="Size"
              options={sizeCategory}
              sortedValue={sortedValue}
            />
            <CategorySort
              title="Color"
              options={colorCategory}
              sortedValue={sortedValue}
            />
          </div>
          <CategorySort
            title="Price"
            options={priceCategory}
            sortedValue={sortedValue}
          />
        </div>
        <hr className="womenCollectionPageshrBar" />
        <div className="womenCollectionPagesGrid">
          <ProductGallery />
          <ProductGallery />
          <ProductGallery colors_available={colors} />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
          <ProductGallery />
        </div>
      </div>
    </>
  );
}

export default KaftansPage;
