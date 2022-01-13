import React from 'react';
import CTABtn from './CTABtn';
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
            <CTABtn 
                text='Checkout'
            />
        </div>
    );
}

export default CartDropdown;