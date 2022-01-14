import React, { useState } from 'react';
import Navbar from './Navbar';
import PhotoBox from './PhotoBox';
import ProductInfo from './ProductInfo';
import appStyles from './App.module.css';


const App = () => {
  const [cartQty, setCartQty] = useState(2);

  return (
    <div className={appStyles.container}>
      <Navbar 
        cartQty={cartQty} 
        setCartQty={setCartQty}
        />
      <div className={appStyles.content}>
        <PhotoBox />
        <ProductInfo 
          manufacturer="SNEAKER COMPANY" 
          name="Fall Limited Edition Sneakers" 
          blurb="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          priceCurrent="$125.00"
          discount="50%"
          priceOriginal="$250.00"
          cartQty={cartQty}
          setCartQty={setCartQty}
          />
      </div>
    </div>
  );
}

export default App;
