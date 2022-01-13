import React, {useState} from 'react';
import CartDropdown from './CartDropdown';
import Badge from './Badge.js'
import iconCart from '../assets/icon-cart.svg';
import cartStyles from './Cart.module.css';

const Cart = ({ badgeQty }) => {
    const [cartDropdownActive, setCartDropdownActive] = useState(false);

    return(
        <div className={cartStyles.container}>
            <Badge 
                qty={badgeQty}
            />
            <img 
                className={cartStyles.cart} 
                src={iconCart} 
                alt="cart icon"
                onClick={()=>{setCartDropdownActive(!cartDropdownActive)}}
            > 
            </img>
            <CartDropdown 
                cartDropdownActive={cartDropdownActive} 
                setCartDropdownActive={setCartDropdownActive}
            />
        </div>
    );
}

export default Cart;