import React from 'react';


const UserIcon = ({ photo, alt }) => {
    return(
        <div>
            <img src={photo} alt={alt} />
        </div>
    );
}

export default UserIcon;