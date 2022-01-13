import React from 'react';
import CartDropdown from './CartDropdown';
import Badge from './Badge.js'
import iconCart from '../assets/icon-cart.svg';
import cartStyles from './Cart.module.css';

const Cart = ({ badgeQty }) => {
    return(
        <div className={cartStyles.container}>
            <Badge 
                qty={badgeQty}
            />
            <img 
                className={cartStyles.cart} 
                src={iconCart} 
                alt="cart icon">
            </img>

        </div>
    );
}

export default Cart;