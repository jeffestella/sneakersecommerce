import React, { useState } from 'react';
import navbarStyles from './Navbar.module.css';
import Cart from './Cart';
import MobileNav from './MobileNav';
import UserIcon from './UserIcon';
import avatar from '../assets/image-avatar.png';
import iconMenu from '../assets/icon-menu.svg';
import logo from '../assets/logo.svg';

const Navbar = ({ cartQty, setCartQty, productData }) => {
    const [navActive, setNavActive] = useState(false);

    return (
        <div className={navbarStyles.container}>
            <MobileNav
                navActive={navActive}
                setNavActive={setNavActive}
            />
            <div className={navbarStyles.left}>
                <button
                    className={navbarStyles.menuBtn}
                    onClick={() => setNavActive(true)}
                >
                    <img src={iconMenu} alt="menubutton" />
                </button>
                <img
                    className={navbarStyles.logo} 
                    src={logo} 
                    alt="sneakers company logo" 
                />
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
                    productData={productData}
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