import React from 'react';
import ctaBtnStyles from './CTABtn.module.css';

import { connect } from 'react-redux';
import { addToCart } from '../actions';

const CTABtn = ({ icon, text, addQty, setAddQty, productID, addToCart }) => {
    return(
        <button 
            className={ctaBtnStyles.container}
            onClick={() => {
                addToCart(productID, addQty)
                setAddQty(0)
            }}
        >
            <span className={ctaBtnStyles.content}>
                {icon ? <img className={ctaBtnStyles.icon} src={icon} alt="cart icon" /> : "" }
                <span>
                    {text}
                </span>
            </span>
        </button>
    );
}

const mapStateToProps = (state) => {
    return {cartContents: state.cartContents};
}

export default connect(mapStateToProps,{addToCart: addToCart})(CTABtn);