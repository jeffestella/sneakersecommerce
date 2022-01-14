import React from 'react';
import Cart from './Cart';
import UserIcon from './UserIcon';
import avatar from '../assets/image-avatar.png';
// import logo from '../assets/logo.svg';
import navbarStyles from './Navbar.module.css';

const Navbar = ({ cartQty, setCartQty }) => {
    return (
        <div className={navbarStyles.container}>
            <div className={navbarStyles.left}>
                <h1>sneakers</h1>
                <div className={navbarStyles.links}>
                    <a href="./collections">Collections</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            </div>
            <div className={navbarStyles.right}>
                <Cart 
                    cartQty={cartQty}
                    setCartQty={setCartQty}
                />
                <UserIcon 
                    className={navbarStyles.avatar}
                    photo={avatar} 
                    alt="man with long hair and sunglasses"
                />
            </div>
        </div>
    );
}

export default Navbar;