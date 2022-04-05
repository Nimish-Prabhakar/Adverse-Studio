import React from 'react';
import './style.css';

function PageProductCard({
  PageProductCardImage,
  PageProductCardName,
  PageProductCardPrice,
  id,
}) {
  return (
    <div className="pageProductCardWrapper" id={id}>
      <div className="pageProductCardInfo">
        <img
          src={PageProductCardImage}
          alt={PageProductCardImage}
          className="kaftanImage"
        />
        <p className="pageProductCardName">{PageProductCardName}</p>
        <p className="pageProductCardName" style={{ opacity: 0.7 }}>
          {PageProductCardPrice}
        </p>
      </div>
    </div>
  );
}

export default PageProductCard;
