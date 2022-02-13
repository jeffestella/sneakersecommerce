import React from 'react';
import cartDropdownStyles from './CartDropdown.module.css';
import { connect } from 'react-redux';

import CheckoutBtn from './CheckoutBtn';
import CartCard from './CartCard';
import products from '../data/products';

const CartDropdown = ({ cartDropdownActive, setCartDropdownActive, cartQty, setCartQty, productData, cartContents }) => {
    const cartList = Object.keys(cartContents).length > 0 ?
        Object.keys(cartContents).map((item) => {
            return <CartCard
                qty={cartContents.item}
                productData={products.item}
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
            { Object.keys(cartContents) > 0 ?
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