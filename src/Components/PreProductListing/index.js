import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PageProductCard from '../../Components/PageProductCard';
import './style.css';

const styles = {
  Typography: {
    marginLeft: '6rem',
    marginTop: '4rem',
    borderBottom: '1px black solid',
    width: '89%',
  },
};

function PreProductListing({ subCategoryName, PageProductMinis }) {
  return (
    <>
      <div className="preProductListingWrapper">
        <Typography
          sx={styles.Typography}
          align="left"
          variant="h2"
          component="div"
          gutterBottom
        >
          {subCategoryName}
          <Link className="fullCollectionLink" to={`/${subCategoryName}`}>
            Shop Full Collection
          </Link>
        </Typography>
        <div className="pageProductCardWrapper">
          {PageProductMinis.map((data) => {
            return (
              <PageProductCard
                PageProductCardImage={data.display_image_url}
                PageProductCardName={data.product_name}
                PageProductCardPrice={data.cost}
                id={data.product_id}
                key={data.product_id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PreProductListing;
