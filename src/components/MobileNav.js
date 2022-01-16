import React from 'react';
import mobileNavStyles from './MobileNav.module.css';
import iconClose from '../assets/icon-close.svg';

const MobileNav = ({ navActive, setNavActive }) => {
    return (
        <div className={`
            ${!navActive ? 
                mobileNavStyles.inactive :
                ""}
            ${mobileNavStyles.container}`}>
            <nav>
                <button 
                    className={mobileNavStyles.closeBtn}
                    onClick={() => {setNavActive(false)}}
                >
                    <img src={iconClose} alt="close button" />  
                </button>
                <div className={mobileNavStyles.links}>
                    <a href="./collections">Collections</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            </nav>
        </div>
    );
}

export default MobileNav;