import React from 'react';
import checkoutBtnStyles from './CheckoutBtn.module.css';

const CheckoutBtn = () => {
    return (
        <button className={checkoutBtnStyles.container}>
            Checkout
        </button>
    )
}

export default CheckoutBtn;