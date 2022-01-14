import React, { useState } from 'react';
import Navbar from './Navbar';
import PhotoBox from './PhotoBox';
import ProductInfo from './ProductInfo';
import appStyles from './App.module.css';

import photoBoxStyles from './PhotoBox.module.css';
import productPhoto1 from '../assets/image-product-1.jpg';
import productPhoto2 from '../assets/image-product-2.jpg';
import productPhoto3 from '../assets/image-product-3.jpg';
import productPhoto4 from '../assets/image-product-4.jpg';
import productThumb1 from '../assets/image-product-1-thumbnail.jpg';
import productThumb2 from '../assets/image-product-2-thumbnail.jpg';
import productThumb3 from '../assets/image-product-3-thumbnail.jpg';
import productThumb4 from '../assets/image-product-4-thumbnail.jpg';


const App = () => {
  const products =[
    {
      name: "Fall Limited Edition Sneakers",
      manufacturer: 'Sneaker Company',
      blurb: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      priceCurrent: 125,
      discount: 50,
      priceOriginal: 250,
      photos: [
        {
          photo: productPhoto1,
          thumb: productThumb1,
          alt: "white and brown sneakers"
        },
        {
          photo: productPhoto2,
          thumb: productThumb2,
          alt: "white and brown sneakers"
        },
        {
          photo: productPhoto3,
          thumb: productThumb3,
          alt: "white and brown sneakers"
        },
        {
          photo: productPhoto4,
          thumb: productThumb4,
          alt: "white and brown sneakers"
        }
      ]
    }
  ]
  const [cartQty, setCartQty] = useState(0);

  return (
    <div className={appStyles.container}>
      <Navbar 
        cartQty={cartQty} 
        setCartQty={setCartQty}
        />
      <div className={appStyles.content}>
        <PhotoBox 
          photos={products[0].photos}
        />
        <ProductInfo 
          manufacturer={products[0].manufacturer}
          name={products[0].name} 
          blurb={products[0].blurb}
          priceCurrent={products[0].priceCurrent}
          discount={products[0].discount}
          priceOriginal={products[0].priceOriginal}
          cartQty={cartQty}
          setCartQty={setCartQty}
          />
      </div>
    </div>
  );
}

export default App;
