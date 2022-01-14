import React from 'react';
import { useState } from 'react';
import iconMinus from '../assets/icon-minus.svg';
import iconPlus from '../assets/icon-plus.svg';
import qtyCounterStyles from './QtyCounter.module.css';

const QtyBtn = ({ symbol, quantity, setQuantity, alt }) => {
    return(
        <button
            onClick={() => {
                // Alter function of button depending on "plus" or "minus" alt text
                //If "minus", don't allow quantity to go below 1
                alt === "minus" ?
                    quantity-1 < 1 ?
                    setQuantity(1) :
                    setQuantity(quantity-1) 
                : setQuantity(quantity+1)
            }}
        >
            <img src={symbol} alt={`${alt} button`}></img>
        </button>
    );
}

const QtyCounter = ({ cartQty, setCartQty }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <span className={qtyCounterStyles.container}>
            <QtyBtn 
                symbol={iconMinus}
                quantity={quantity}
                setQuantity={setQuantity}
                alt="minus"
            />
            <span className={qtyCounterStyles.quant}>{quantity}</span>
            <QtyBtn 
                symbol={iconPlus}
                quantity={quantity}
                setQuantity={setQuantity}
                alt="plus"
            />
        </span>
    );
}

export default QtyCounter;