import React from 'react';
import QtyCounter from './QtyCounter';
import CTABtn from './CTABtn'

const ProductInfo = (props) => {
    return(
        <div>
            <h3>{props.manufacturer}</h3>
            <h1>{props.name}</h1>
            <p>{props.blurb}</p>
            <div> 
                <div> 
                    <h2>{props.priceCurrent}</h2>
                    <span>{props.discount}</span>
                </div>
                <h3>{props.priceOriginal}</h3>
            </div>
            <QtyCounter />
            <CTABtn 
                icon="cart"
                text="Add to cart"
            />
        </div>
    );
}

export default ProductInfo;