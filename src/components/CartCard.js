import React from 'react';
import cartCardStyles from './CartCard.module.css';
import iconDelete from '../assets/icon-delete.svg';
import { clearCart } from '../actions';
import { connect } from 'react-redux';

const CartCard = ({ cartQty, setCartQty, productData, clearCart }) => {
    return (
        <div className={cartCardStyles.container}>
            <img
                className={cartCardStyles.photo}
                src={productData.photos[0].photo}
                alt="pair of white and brown sneakers"
            />
            <div className={cartCardStyles.text}>
                <p className={cartCardStyles.name}>{productData.name}</p>
                <p>
                    {`$${productData.priceCurrent}.00 x ${cartQty}`} 
                    <span className={cartCardStyles.total}>{`$${productData.priceCurrent * cartQty}.00`}</span>
                </p>
            </div>
            <img
                className={cartCardStyles.delete}
                src={iconDelete}
                alt="trash button"
                onClick={() => {
                    clearCart()
                    // setCartDropdownActive(false);
                }}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {state: state}
}

export default connect(mapStateToProps, {clearCart: clearCart})(CartCard);