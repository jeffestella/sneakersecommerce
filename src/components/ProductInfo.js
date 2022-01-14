import React, { useState} from 'react';
import QtyCounter from './QtyCounter';
import CTABtn from './CTABtn'
import productInfoStyes from './ProductInfo.module.css';
import iconCart from '../assets/icon-cart.svg';

const ProductInfo = (props) => {
    const [addQty, setAddQty] = useState(1);

    return(
        <div className={productInfoStyes.container}>
            <h3 className={productInfoStyes.company}>{props.manufacturer}</h3>
            <h1 className={productInfoStyes.name}>{props.name}</h1>
            <p className={productInfoStyes.blurb}>{props.blurb}</p>
            <div> 
                <div className={productInfoStyes.current}> 
                    <span className={productInfoStyes.price}>{`$${props.priceCurrent}.00`}</span>
                    <span className={productInfoStyes.discount}>{`${props.discount*100}%`}</span>
                </div>
                <h3 className={productInfoStyes.original}>{`$${props.priceOriginal}.00`}</h3>
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
                    cartQty={props.cartQty}
                    setCartQty={props.setCartQty}
                />
            </div>
        </div>
    );
}

export default ProductInfo;