import React from 'react';
import { useState } from 'react';

const QtyBtn = ({ symbol }) => {
    return(
        <button>
            {symbol}
        </button>
    );
}

const QtyCounter = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <span>
            <QtyBtn 
                symbol={"-"}
                onClick={() => {
                    setQuantity(quantity - 1)
                }}
            />
            <span>{quantity}</span>
            <QtyBtn 
                symbol={"+"} 
                onClick={() => {
                    setQuantity(quantity + 1)
                }}
            />
        </span>
    );
}

export default QtyCounter;