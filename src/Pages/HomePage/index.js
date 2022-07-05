import React from 'react';
import bannerImage from '../../assets/img/banner_image.jpeg';
import './style.css';

function HomePage() {
  return (
    <>
      <div className="bannerImageWrapper">
        <img className="bannerImage" src={bannerImage} alt="banner_image" />
        <h1 className="seasonName">Season Nmae</h1>
        <h3 className="collectionName">Collection Name</h3>
      </div>
    </>
  );
}

export default HomePage;
