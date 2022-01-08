import React from 'react';

const CTABtn = ({ icon, text }) => {
    return(
        <button>
            <span>
                
                icon ?
                {icon} 
            </span>
            {text}
        </button>
    );
}

export default CTABtn;