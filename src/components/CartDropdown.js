import React from 'react';
import cartDropdownStyles from './CartDropdown.module.css';
import { connect } from 'react-redux';

import CheckoutBtn from './CheckoutBtn';
import CartCard from './CartCard';
import products from '../data/products.js';

const CartDropdown = ({ cartDropdownActive, setCartDropdownActive,  cartContents }) => {
    const cartQty = Object.keys(cartContents).length;
    const cartList = cartQty > 0 ?
        Object.keys(cartContents).map((item) => {
            return <CartCard
                qty={cartContents[item]}
                productData={products[item]}
                key={item}
            />
        }) :
        "";

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
                {cartList}
                <CheckoutBtn /> 
            </div> :
                <p className={cartDropdownStyles.empty}>Your cart is empty.</p>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {cartContents: state.cartContents}
}

export default connect(mapStateToProps)(CartDropdown);