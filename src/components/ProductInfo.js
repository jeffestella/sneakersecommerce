import React, { useState} from 'react';
import productInfoStyes from './ProductInfo.module.css';
import { connect } from 'react-redux';

import products from '../data/products.js';
import QtyCounter from './QtyCounter';
import CTABtn from './CTABtn'
import iconCart from '../assets/icon-cart.svg';

const ProductInfo = ({ productID }) => {
    const [addQty, setAddQty] = useState(0);
    const product = products[productID];

    return(
        <div className={productInfoStyes.container}>
            <h3 className={productInfoStyes.company}>{product.manufacturer}</h3>
            <h1 className={productInfoStyes.name}>{product.name}</h1>
            <p className={productInfoStyes.blurb}>{product.blurb}</p>
            <div className={productInfoStyes.prices}> 
                <div className={productInfoStyes.current}> 
                    <span className={productInfoStyes.price}>{`$${product.priceCurrent}.00`}</span>
                    <span className={productInfoStyes.discount}>{`${product.discount*100}%`}</span>
                </div>
                <h3 className={productInfoStyes.original}>{`$${product.priceOriginal}.00`}</h3>
            </div>
            <div className={productInfoStyes.clickables}>
                <QtyCounter 
                    addQty={addQty}
                    setAddQty={setAddQty}
                />
                <CTABtn 
                    icon={iconCart}
                    text="Add to cart"
                    addQty={addQty}
                    setAddQty={setAddQty}
                    productID={productID}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(ProductInfo);