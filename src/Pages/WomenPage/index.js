import React, {useState, useEffect} from 'react';
import PreProductCatalog from '../../Components/PreProductCatalog';
import PreProductListing from '../../Components/PreProductListing';
import kaftanImage from '../../assets/img/kaftan.jpeg';
import topImage from '../../assets/img/topImage.jpeg';
import bottomsImage from '../../assets/img/bottoms.jpeg';
import dressImage from '../../assets/img/dress.jpeg';
import crochetImage from '../../assets/img/crochet.jpeg';
import accessoriesImage from '../../assets/img/accessories.jpeg';
import './style.css';
import {women_listing_response} from '../../assets/dummy/women_page'
function WomenPage() {
  const [listingData, setListingData] = useState([])

  function getProductMinisByCategoryID(id) {
    console.log(listingData.product_minis)
    return listingData.filter(obj => obj.product_category_id === id)
  }

  useEffect(() =>{
    fetch('https://sample-backend-server.onrender.com/api/v1/listing/women')
        .then(response => response.json())
        .then(data => setListingData(data.product_minis));
    
  },[])
  return (
    <div className="womenPageWrapper">
      <PreProductCatalog />
      <PreProductListing
        subCategoryName="Kaftan"
        PageProductCardImage={kaftanImage}
        PageProductCardName="Pink Kaftan"
        PageProductCardPrice="$300.00"
        id="kaftans"
        PageProductMinis={getProductMinisByCategoryID(1)}
      />
      <PreProductListing
        subCategoryName="Tops"
        PageProductCardImage={topImage}
        PageProductCardName="Cool Top"
        PageProductCardPrice="$500.00"
        id="tops"
        PageProductMinis={getProductMinisByCategoryID(3)}
      />
      <PreProductListing
        subCategoryName="Bottoms"
        PageProductCardImage={bottomsImage}
        PageProductCardName="Blue Jeans"
        PageProductCardPrice="$400.00"
        id="bottoms"
        PageProductMinis={getProductMinisByCategoryID(2)}
      />
      <PreProductListing
        subCategoryName="Dresses"
        PageProductCardImage={dressImage}
        PageProductCardName="Flower Dress"
        PageProductCardPrice="$900.00"
        id="dresses"
        PageProductMinis={getProductMinisByCategoryID(4)}
      />
      <PreProductListing
        subCategoryName="Crochets"
        PageProductCardImage={crochetImage}
        PageProductCardName="Nice Crochet"
        PageProductCardPrice="$200.00"
        id="crochets"
        PageProductMinis={getProductMinisByCategoryID(5)}
      />
      <PreProductListing
        subCategoryName="Accessories"
        PageProductCardImage={accessoriesImage}
        PageProductCardName="Cool Sunglasses"
        PageProductCardPrice="$50.00"
        id="accessories"
        PageProductMinis={getProductMinisByCategoryID(6)}
      />
    </div>
  );
}

export default WomenPage;
