import React from 'react';
import badgeStyles from './Badge.module.css';

import { connect } from 'react-redux';

const Badge = ({ cartContents }) => {
    return (
        <div className={`
        ${cartContents < 1 ?
            badgeStyles.inactive:
            ''
        }
            ${badgeStyles.container}`}>
            {cartContents}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cartContents: state.cartContents}
}

export default connect(mapStateToProps)(Badge);