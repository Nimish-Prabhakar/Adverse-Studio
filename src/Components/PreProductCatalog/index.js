import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import { BsDashLg } from 'react-icons/bs';
import './style.css';

const styles = {
  Typography: {
    marginLeft: '6rem',
    marginTop: '4rem',
    fontWeight: 900,
    fontSize: '2rem',
  },
};

function PreProductCatalog({
  pageName,
  pageCategories,
  displayImageLeft,
  displayImageRight,
}) {
  return (
    <div className="preProductCatalogWrapper">
      <Typography
        sx={styles.Typography}
        align="left"
        variant="h5"
        component="div"
        gutterBottom
      >
        Choose from different categories for {pageName}
      </Typography>
      <div className="categoryFlexWrapper">
        <img
          className="categoryLeft"
          src={displayImageLeft}
          alt="displayImageLeft"
        />
        <div className="categoryNav">
          <div className="categoryListingWrapper">
            {pageCategories.map((category) => {
              return (
                <Link
                  className="categoriesListing"
                  activeClass="active"
                  to={category}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  key={category}
                >
                  <BsDashLg style={{ paddingTop: '8px' }} />
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
        <img
          className="categoryRight"
          src={displayImageRight}
          alt="displayImageRight"
        />
      </div>
    </div>
  );
}

export default PreProductCatalog;
