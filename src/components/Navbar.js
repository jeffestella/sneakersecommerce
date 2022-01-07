import React from 'react';
import Cart from './Cart';
import UserIcon from './UserIcon';
import avatar from '../assets/image-avatar.png';

const Navbar = () => {
    return (
        <div>
            <h1>Sneakers</h1>
            <ul>
                <li><a href="./collections">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <Cart />
            <UserIcon 
                photo={avatar} 
                alt="man with long hair and sunglasses"
            />
        </div>
    );
}

export default Navbar;