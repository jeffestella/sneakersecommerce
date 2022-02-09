import React, { useState } from 'react';
import Navbar from './Navbar';
// import PhotoBox from './PhotoBox';
import PhotoDock from './PhotoDock';
import ProductInfo from './ProductInfo';
import appStyles from './App.module.css';

import { products } from '../data/products';

const App = () => {
  const [cartQty, setCartQty] = useState(0);
  const [productID, setProductID] = useState(0);

  return (
    <div className={appStyles.container}>
      <Navbar 
        cartQty={cartQty} 
        setCartQty={setCartQty}
        productData={products[productID]}
        />
      <div className={appStyles.content}>
        <PhotoDock 
          photos={products[productID].photos}
        />
        {/* <PhotoBox 
          photos={products[productID].photos}
        /> */}
        <ProductInfo 
          // productID and setProductID never changes since this project only has one product
          // can be used when we need to add more products
          productID={productID}
          setProductID={setProductID}
          manufacturer={products[productID].manufacturer}
          name={products[productID].name} 
          blurb={products[productID].blurb}
          priceCurrent={products[productID].priceCurrent}
          discount={products[productID].discount}
          priceOriginal={products[productID].priceOriginal}
          cartQty={cartQty}
          setCartQty={setCartQty}
          />
      </div>
    </div>
  );
}

export default App;
