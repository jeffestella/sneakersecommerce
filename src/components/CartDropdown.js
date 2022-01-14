import React from 'react';
import CheckoutBtn from './CheckoutBtn';
import iconDelete from '../assets/icon-delete.svg';
import cartDropdownStyles from './CartDropdown.module.css';

const CartDropdown = ({ cartDropdownActive, setCartDropdownActive, cartQty, setCartQty }) => {
    const cartContents = () => {
        return(
            <>
                <div>Product Info Here</div>
                <CheckoutBtn />
            </>
        )
    }

    return(
        <div className={`
            ${!cartDropdownActive ? 
                cartDropdownStyles.inactive :
                '' 
            }
        ${cartDropdownStyles.container}`}>
            <p>Cart</p>
            <hr />
            { cartQty > 0 ?
            <>
                <div>
                    Product Info Here
                    <img
                        className={cartDropdownStyles.delete} 
                        src={iconDelete} 
                        alt="trash button"  
                        onClick={() => {
                            setCartQty(0);
                            // setCartDropdownActive(false);
                        }}    
                    />
                </div>
                <CheckoutBtn /> 
            </> :
                <p>Your cart is empty</p>
            }
        </div>
    );
}

export default CartDropdown;