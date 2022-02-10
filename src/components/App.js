import React, { useState } from 'react';
import Navbar from './Navbar';
// import PhotoBox from './PhotoBox';
import PhotoDock from './PhotoDock';
import ProductInfo from './ProductInfo';
import appStyles from './App.module.css';

import products from '../data/products';

const App = () => {
  const [cartQty, setCartQty] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(products.fles);

  return (
    <div className={appStyles.container}>
      <Navbar 
        cartQty={cartQty} 
        setCartQty={setCartQty}
        productData={currentProduct}
        />
      <div className={appStyles.content}>
        <PhotoDock 
          photos={currentProduct.photos}
        />
        {/* <PhotoBox 
          photos={products[productID].photos}
        /> */}
        <ProductInfo 
          productID="fles"
          />
      </div>
    </div>
  );
}

export default App;
