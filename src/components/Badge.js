import React from 'react';
import badgeStyles from './Badge.module.css';

const Badge = ({ qty }) => {
    return (
        <div className={badgeStyles.container}>
            {qty}
        </div>
    )
}

export default Badge;