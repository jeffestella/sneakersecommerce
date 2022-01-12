import React, { useState } from 'react';
import modalStyles from './Modal.module.css';
import iconClose from '../assets/icon-close.svg';
import iconPrevious from '../assets/icon-previous.svg';
import iconNext from '../assets/icon-next.svg';

const Modal = ( { modalActive, setModalActive, photos, firstPhoto }) => {
    const [currentPhoto, setCurrentPhoto] = useState(firstPhoto);

    const thumbs = photos.map( (photo) => {
        return (
            <img 
                classname={`
                    ${currentPhoto===photo.photo ?
                        modalStyles.selected :
                        ''
                    } ${modalStyles.thumbnail}`}
                src={photo.thumb} 
                alt={photo.alt}
                onClick={() => {setCurrentPhoto(photo.photo)}}

            />
        )
    })

    return(
        <div 
            className={`${modalStyles.container} 
                ${
                    !modalActive ?
                    modalStyles.inactive :
                    ''
                }
            `}
        >
            <div className={modalStyles.content}>
                <img 
                    src={iconClose} 
                    alt="X button to close"
                    onClick={()=> {setModalActive(false)}}
                />
                <div className={modalStyles.current}>
                    <img 
                        src={iconPrevious} 
                        alt="arrow (previous)" 
                    
                    />
                    <img 
                        src={currentPhoto} 
                        alt="sneakers">
                    </img>
                    <img
                        src={iconNext}
                        alt="arrow (next)"
                    />
                </div>
                <div className={modalStyles.thumbnails}>
                    {thumbs}
                </div>
            </div>
        </div>
    );
}

export default Modal;