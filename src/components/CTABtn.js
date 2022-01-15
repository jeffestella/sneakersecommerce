import React from 'react';
import ctaBtnStyles from './CTABtn.module.css';

const CTABtn = ({ icon, text, addQty, setAddQty, cartQty, setCartQty }) => {
    return(
        <button 
            className={ctaBtnStyles.container}
            onClick={() => {
                setCartQty(cartQty + addQty);
                setAddQty(0);
            }}
        >
            <span>
                {icon ? <img className={ctaBtnStyles.icon} src={icon} alt="cart icon" /> : "" }
            </span>
            {text}
        </button>
    );
}

export default CTABtn;