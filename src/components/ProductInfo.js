import React from 'react';
import QtyCounter from './QtyCounter';
import CTABtn from './CTABtn'
import productInfoStyes from './ProductInfo.module.css';
import iconCart from '../assets/icon-cart.svg';

const ProductInfo = (props) => {
    return(
        <div className={productInfoStyes.container}>
            <h3 className={productInfoStyes.company}>{props.manufacturer}</h3>
            <h1 className={productInfoStyes.name}>{props.name}</h1>
            <p className={productInfoStyes.blurb}>{props.blurb}</p>
            <div> 
                <div className={productInfoStyes.current}> 
                    <span className={productInfoStyes.price}>{props.priceCurrent}</span>
                    <span className={productInfoStyes.discount}>{props.discount}</span>
                </div>
                <h3 className={productInfoStyes.original}>{props.priceOriginal}</h3>
            </div>
            <div className={productInfoStyes.clickables}>
                <QtyCounter />
                <CTABtn 
                    icon={iconCart}
                    text="Add to cart"
                />
            </div>
        </div>
    );
}

export default ProductInfo;