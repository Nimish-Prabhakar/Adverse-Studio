import React from 'react';
import PageProductCard from '../../Components/PageProductCard';
import Typography from '@mui/material/Typography';
import './style.css';
import { Link } from 'react-router-dom';

const styles = {
  Typography: {
    marginLeft: '6rem',
    marginTop: '4rem',
    borderBottom: '1px black solid',
    width: '89%',
  },
};

function PreProductListing({
  subCategoryName,
  PageProductCardImage,
  PageProductCardName,
  PageProductCardPrice,
  id,
}) {
  return (
    <div className="preProductListingWrapper">
      <Typography
        sx={styles.Typography}
        align="left"
        variant="h2"
        component="div"
        gutterBottom
      >
        {subCategoryName}
        <Link className="fullCollectionLink" to="/">
          Shop Full Collection
        </Link>
      </Typography>
      <div className="pageProductCardWrapper">
        <PageProductCard
          PageProductCardImage={PageProductCardImage}
          PageProductCardName={PageProductCardName}
          PageProductCardPrice={PageProductCardPrice}
          id={id}
        />
        <PageProductCard
          PageProductCardImage={PageProductCardImage}
          PageProductCardName={PageProductCardName}
          PageProductCardPrice={PageProductCardPrice}
          id={id}
        />
        <PageProductCard
          PageProductCardImage={PageProductCardImage}
          PageProductCardName={PageProductCardName}
          PageProductCardPrice={PageProductCardPrice}
          id={id}
        />
        <PageProductCard
          PageProductCardImage={PageProductCardImage}
          PageProductCardName={PageProductCardName}
          PageProductCardPrice={PageProductCardPrice}
          id={id}
        />
      </div>
    </div>
  );
}

export default PreProductListing;
