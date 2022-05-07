import React from 'react';
import dress from '../../assets/img/dress.jpeg';
import './style.css';

function ProductGallery({ colors_available = [] }) {
  return (
    <div className="productGalleryDetailsFlex">
      <img className="productGalleryImage" src={dress} alt="dress" />
      <p className="productGalleryTitle">Cool Black Dress</p>
      <p className="productGalleryPrice">&#8377;200</p>
      <div className="productGallerycolorFlex">
        {colors_available.map((color, index) => {
          return (
            <span
              key={index}
              className="productGallerycolorDot"
              style={{ color: color, backgroundColor: color }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGallery;
