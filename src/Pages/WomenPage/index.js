import React from 'react';
import PreProductCatalog from '../../Components/PreProductCatalog';
import PreProductListing from '../../Components/PreProductListing';
import kaftanImage from '../../assets/img/kaftan.jpeg';
import topImage from '../../assets/img/topImage.jpeg';
import bottomsImage from '../../assets/img/bottoms.jpeg';
import dressImage from '../../assets/img/dress.jpeg';
import crochetImage from '../../assets/img/crochet.jpeg';
import accessoriesImage from '../../assets/img/accessories.jpeg';
import './style.css';

function WomenPage() {
  return (
    <div className="womenPageWrapper">
      <PreProductCatalog />
      <PreProductListing
        subCategoryName="Kaftan"
        PageProductCardImage={kaftanImage}
        PageProductCardName="Pink Kaftan"
        PageProductCardPrice="$300.00"
        id="kaftans"
      />
      <PreProductListing
        subCategoryName="Tops"
        PageProductCardImage={topImage}
        PageProductCardName="Cool Top"
        PageProductCardPrice="$500.00"
        id="tops"
      />
      <PreProductListing
        subCategoryName="Bottoms"
        PageProductCardImage={bottomsImage}
        PageProductCardName="Blue Jeans"
        PageProductCardPrice="$400.00"
        id="bottoms"
      />
      <PreProductListing
        subCategoryName="Dresses"
        PageProductCardImage={dressImage}
        PageProductCardName="Flower Dress"
        PageProductCardPrice="$900.00"
        id="dresses"
      />
      <PreProductListing
        subCategoryName="Crochets"
        PageProductCardImage={crochetImage}
        PageProductCardName="Nice Crochet"
        PageProductCardPrice="$200.00"
        id="crochets"
      />
      <PreProductListing
        subCategoryName="Accessories"
        PageProductCardImage={accessoriesImage}
        PageProductCardName="Cool Sunglasses"
        PageProductCardPrice="$50.00"
        id="accessories"
      />
    </div>
  );
}

export default WomenPage;
