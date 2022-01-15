import React from 'react';
import cartCardStyles from './CartCard.module.css';
import iconDelete from '../assets/icon-delete.svg';

const CartCard = ({ cartQty, setCartQty, productData }) => {
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
                    setCartQty(0);
                    // setCartDropdownActive(false);
                }}
            />
        </div>
    )
}

export default CartCard;