import React from 'react';
import iconMinus from '../assets/icon-minus.svg';
import iconPlus from '../assets/icon-plus.svg';
import qtyCounterStyles from './QtyCounter.module.css';

const QtyBtn = ({ symbol, addQty, setAddQty, alt }) => {
    return(
        <button
            onClick={() => {
                // Alter function of button depending on "plus" or "minus" alt text
                //If "minus", don't allow quantity to go below 1
                alt === "minus" ?
                    addQty-1 < 1 ?
                    addQty(1) :
                    setAddQty(addQty-1) 
                : setAddQty(addQty+1)
            }}
        >
            <img src={symbol} alt={`${alt} button`}></img>
        </button>
    );
}

const QtyCounter = ({ addQty, setAddQty }) => {

    return (
        <span className={qtyCounterStyles.container}>
            <QtyBtn 
                symbol={iconMinus}
                addQty={addQty}
                setAddQty={setAddQty}
                alt="minus"
            />
            <span className={qtyCounterStyles.quant}>{addQty}</span>
            <QtyBtn 
                symbol={iconPlus}
                addQty={addQty}
                setAddQty={setAddQty}
                alt="plus"
            />
        </span>
    );
}

export default QtyCounter;