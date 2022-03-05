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
  PageProductMinis
}) {

  function getImageForCard(image_urls) {
    var hightestPriority = 999
    var image_url = ''
    
    for (let obj of image_urls){
      if(obj.prefrence < hightestPriority) {
        hightestPriority = obj.prefrence
        image_url = obj.image_url
      }
    }
    return image_url
  }

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
        {
          PageProductMinis.map((data) => <PageProductCard
            PageProductCardImage={getImageForCard(data.image_urls)}
            PageProductCardName={data.product_name}
            PageProductCardPrice={data.cost}
            id={id}
        />)
        }
      </div>
    </div>
  );
}

export default PreProductListing;
