import React from 'react';
import photoBoxStyles from './PhotoBox.module.css';

const PhotoBox = () => {
    return(
        <div className={photoBoxStyles.container}>
            <div>
                Main Photo
            </div>
            <div>
                <span>Photo1</span>
                <span>Photo2</span>
                <span>Photo3</span>
                <span>Photo4</span>
            </div>
        </div>
    );
}

export default PhotoBox;