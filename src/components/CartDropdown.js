import React from 'react';
import CheckoutBtn from './CheckoutBtn';
import cartDropdownStyles from './CartDropdown.module.css';

const CartDropdown = ({ cartDropdownActive, setCartDropdownActive }) => {
    return(
        <div className={`
            ${!cartDropdownActive ? 
                cartDropdownStyles.inactive :
                '' 
            }
        ${cartDropdownStyles.container}`}>
            Cart
            <hr />
            <CheckoutBtn />
        </div>
    );
}

export default CartDropdown;