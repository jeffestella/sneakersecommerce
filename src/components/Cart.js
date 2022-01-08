import React from 'react';
import cartIcon from '../assets/icon-cart.svg';

const Cart = ({ className }) => {
    return(
        <img 
            className={className} 
            src={cartIcon} 
            alt="cart icon">
        </img>
    );
}

export default Cart;