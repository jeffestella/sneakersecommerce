import React from 'react';
import badgeStyles from './Badge.module.css';

import { connect } from 'react-redux';

const Badge = ({ cartContents }) => {
    const cartQty = Object.values(cartContents).reduce((prev, current) => prev + current, 0);
    return (
        <div className={`
        ${cartQty < 1 ?
            badgeStyles.inactive:
            ''
        }
            ${badgeStyles.container}`}>
            {cartQty > 0 ?
                cartQty :
                ""}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cartContents: state.cartContents}
}

export default connect(mapStateToProps)(Badge);