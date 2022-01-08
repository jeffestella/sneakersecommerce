import React from 'react';
import iconCart from '../assets/icon-cart.svg';

const Cart = ({ className }) => {
    return(
        <img 
            className={className} 
            src={iconCart} 
            alt="cart icon">
        </img>
    );
}

export default Cart;