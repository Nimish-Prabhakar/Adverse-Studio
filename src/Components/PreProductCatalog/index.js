import React from 'react';
import Typography from '@mui/material/Typography';
import categoryLeft from '../../assets/img/categoryLeft.jpeg';
import categoryRight from '../../assets/img/categoryRight.jpeg';
import { Link, animateScroll as scroll } from 'react-scroll';
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
        <div className="categoryNav">
          <div className="categoryListingWrapper">
            <Link
              className="categoriesListing"
              activeClass="active"
              to="kaftans"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Kaftans
            </Link>
            <Link
              className="categoriesListing"
              to="bottoms"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Bottoms
            </Link>
            <Link
              className="categoriesListing"
              to="tops"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Tops
            </Link>
            <Link
              className="categoriesListing"
              to="dresses"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Dresses
            </Link>
            <Link
              className="categoriesListing"
              to="crochets"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Crochets
            </Link>
            <Link
              className="categoriesListing"
              to="accessories"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Accessories
            </Link>
          </div>
        </div>
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
