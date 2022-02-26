import React from 'react';
import Typography from '@mui/material/Typography';
import categoryLeft from '../../assets/img/categoryLeft.jpeg';
import categoryRight from '../../assets/img/categoryRight.jpeg';
import './style.css';

const styles = {
  Typography: {
    marginLeft: '6rem',
    marginTop: '4rem',
    fontWeight: 900,
    fontSize: '2rem',
  },
};

function PreProductCatalog({ categoryName, categoryLink, imageArray }) {
  return (
    <div className="preProductCatalogWrapper">
      <Typography
        sx={styles.Typography}
        align="left"
        variant="h5"
        component="div"
        gutterBottom
      >
        Choose from different categories for Women
      </Typography>
      <div className="categoryFlexWrapper">
        <img className="categoryLeft" src={categoryLeft} alt="categoryLeft" />
        <nav className="categoryNav">
          <ul className="categoryListingWrapper">
            <li className="categoriesListing">Kaftaans</li>
            <li className="categoriesListing">Bottoms</li>
            <li className="categoriesListing">Tops</li>
            <li className="categoriesListing">Dresses</li>
            <li className="categoriesListing">Crochets</li>
            <li className="categoriesListing">Accessories</li>
          </ul>
        </nav>
        <img
          className="categoryRight"
          src={categoryRight}
          alt="categoryRight"
        />
      </div>
    </div>
  );
}

export default PreProductCatalog;
