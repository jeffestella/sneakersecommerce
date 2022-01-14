import React, {useState} from 'react';
import CartDropdown from './CartDropdown';
import Badge from './Badge.js'
import iconCart from '../assets/icon-cart.svg';
import cartStyles from './Cart.module.css';

const Cart = ({ cartQty, setCartQty }) => {
    const [cartDropdownActive, setCartDropdownActive] = useState(false);

    return(
        <div className={cartStyles.container}>
            <Badge 
                cartQty={cartQty}
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
                cartQty={cartQty}
                setCartQty={setCartQty}
            />
        </div>
    );
}

export default Cart;