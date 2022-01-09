import React from 'react';
import ctaBtnStyles from './CTABtn.module.css';

const CTABtn = ({ icon, text }) => {
    return(
        <button className={ctaBtnStyles.container}>
            <span>
                {icon ? <img className={ctaBtnStyles.icon} src={icon} alt="cart icon" /> : "" }
            </span>
            {text}
        </button>
    );
}

export default CTABtn;