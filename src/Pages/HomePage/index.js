import React from 'react';
import bannerImage from '../../assets/img/banner_image.jpeg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Footer from '../../Components/Footer';
import { purple } from '@mui/material/colors';
import './style.css';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  padding: '10px 60px',
  fontSize: '1.3rem',
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function HomePage() {
  return (
    <>
      <div className="bannerImageWrapper">
        <img className="bannerImage" src={bannerImage} alt="banner_image" />
        <h1 className="seasonName">Season Nmae</h1>
        <h3 className="collectionName">Collection Name</h3>
        <div className="serachBtnWrapper">
          <ColorButton size="large" variant="contained">
            View Collection
          </ColorButton>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
