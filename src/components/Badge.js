import React from 'react';
import badgeStyles from './Badge.module.css';

const Badge = ({ cartQty }) => {
    return (
        <div className={`
        ${cartQty < 1 ?
            badgeStyles.inactive:
            ''
        }
        ${badgeStyles.container}`}>
            {cartQty}
        </div>
    )
}

export default Badge;