import React from 'react';
import CheckoutBtn from './CheckoutBtn';
import CartCard from './CartCard';
import cartDropdownStyles from './CartDropdown.module.css';

const CartDropdown = ({ cartDropdownActive, setCartDropdownActive, cartQty, setCartQty, productData }) => {
    return(
        <div className={`
            ${!cartDropdownActive ? 
                cartDropdownStyles.inactive :
                '' 
            }
        ${cartDropdownStyles.container}`}>
            <p className={cartDropdownStyles.title}>Cart</p>
            <hr />
            { cartQty > 0 ?
            <div className={cartDropdownStyles.below}>
                <CartCard 
                    cartQty={cartQty}
                    setCartQty={setCartQty}
                    productData={productData}
                />
                <CheckoutBtn /> 
            </div> :
                <p className={cartDropdownStyles.empty}>Your cart is empty.</p>
            }
        </div>
    );
}

export default CartDropdown;