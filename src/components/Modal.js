import React, { useState } from 'react';
import modalStyles from './Modal.module.css';
import iconClose from '../assets/icon-close.svg';
import iconPrevious from '../assets/icon-previous.svg';
import iconNext from '../assets/icon-next.svg';

const Modal = ( { modalActive, setModalActive, photos, outerPhoto }) => {
    const [currentPhoto, setCurrentPhoto] = useState(outerPhoto);

    const thumbs = photos.map( (photo) => {
        return (
            <div
                className={`
                    ${currentPhoto === photo.photo ?
                        modalStyles.selected :
                        ''
                    } ${modalStyles.thumbnail}`}
            >
                <img 
                    src={photo.thumb} 
                    alt={photo.alt}
                    onClick={() => {setCurrentPhoto(photo.photo)}}
                    
                    />
            </div>
        )
    })

    const increment = () => {
        let i = -1;
        for (const photo of photos) {
            if (photo.photo === currentPhoto) {
                i = photos.indexOf(photo);
            }
        }
        // i = index of currentPhoto
        i+1 >= photos.length ?
            i  = 0 :
            i  = i+1;
        setCurrentPhoto(photos[i].photo)
    };

    const decrement = () => {
        let i = 10;
        for (const photo of photos) {
            if (photo.photo === currentPhoto) {
                i = photos.indexOf(photo);
            }
        }
        // i = index of currentPhoto
        i - 1 < 0 ?
            i = photos.length - 1 :
            i = i - 1;
        setCurrentPhoto(photos[i].photo)
    };

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
                    className={modalStyles.closebtn}
                    src={iconClose} 
                    alt="X button to close"
                    onClick={()=> {setModalActive(false)}}
                />
                <div className={modalStyles.current}>
                    <button 
                        className={`
                            ${modalStyles.arrowbtn}
                            ${modalStyles.previousbtn}
                        `} 
                        onClick={ () => {decrement()}}
                    >
                        <img 
                        src={iconPrevious} 
                        alt="arrow (previous)" 
                        />
                    </button>
                    <img 
                        className={modalStyles.currentphoto}
                        src={currentPhoto} 
                        alt="sneakers">
                    </img>
                    <button 
                        className={`
                            ${modalStyles.arrowbtn}
                            ${modalStyles.nextbtn}
                        `}
                        onClick={() => { increment()}}
                    >
                        <img
                            src={iconNext}
                            alt="arrow (next)"
                        />
                    </button>
                </div>
                <div className={modalStyles.thumbnails}>
                    {thumbs}
                </div>
            </div>
        </div>
    );
}

export default Modal;