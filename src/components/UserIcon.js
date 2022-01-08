import React from 'react';


const UserIcon = ({ className, photo, alt }) => {
    return(
        <div>
            <img 
                className={className} 
                src={photo} 
                alt={alt} 
            />
        </div>
    );
}

export default UserIcon;