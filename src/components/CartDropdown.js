import React from 'react';
import cartDropdownStyles from './CartDropdown.module.css';
import { connect } from 'react-redux';

import CheckoutBtn from './CheckoutBtn';
import CartCard from './CartCard';
import products from '../data/products';

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

const mapStateToProps = (state) => {
    return {cartContents: state.cartContents}
}

export default connect(mapStateToProps)(CartDropdown);