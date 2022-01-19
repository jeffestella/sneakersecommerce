import React, { useState} from 'react';
import photoDockStyles from './PhotoDock.module.css';

import Modal from './Modal';
import iconPrevious from '../assets/icon-previous.svg';
import iconNext from '../assets/icon-next.svg';

const PhotoDock = ({ photos }) => {
    const defaultPhoto = photos[0].photo;
    const [currentPhoto, setCurrentPhoto] = useState(defaultPhoto);
    const [modalActive, setModalActive] = useState(false);

    const thumbs = photos.map((photo) => {
        return (
            <div
                className={`
                    ${currentPhoto === photo.photo ?
                        photoDockStyles.selected :
                        ''
                    } ${photoDockStyles.thumbnail}`}
                key={photo.thumb}
            >
                <img
                    src={photo.thumb}
                    alt={photo.alt}
                    onClick={() => { setCurrentPhoto(photo.photo) }}

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
        i + 1 >= photos.length ?
            i = 0 :
            i = i + 1;
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
            className={photoDockStyles.container}
        >
            <Modal 
                modalActive={modalActive}
                setModalActive={setModalActive}
                photos={photos}
                defaultPhoto={currentPhoto}
            />
            <div className={photoDockStyles.main}>
                <button
                    className={`
                            ${photoDockStyles.arrowBtn}
                            ${photoDockStyles.previousBtn}
                        `}
                    onClick={() => { decrement() }}
                >
                    <img
                        src={iconPrevious}
                        alt="arrow (previous)"
                    />
                </button>
                <div 
                    className={photoDockStyles.mainPhoto}
                    onClick={() => {setModalActive(true)}}
                >
                    <img
                        className={photoDockStyles.currentphoto}
                        src={currentPhoto}
                        alt="sneakers">
                    </img>
                </div>
                <div className={photoDockStyles.mainPhotoMobile}>
                    <img
                        className={photoDockStyles.currentphoto}
                        src={currentPhoto}
                        alt="sneakers">
                    </img>
                </div>
                <button
                    className={`
                            ${photoDockStyles.arrowBtn}
                            ${photoDockStyles.nextBtn}
                        `}
                    onClick={() => { increment() }}
                >
                    <img
                        src={iconNext}
                        alt="arrow (next)"
                    />
                </button>
            </div>
            <div className={photoDockStyles.thumbnails} >
                {thumbs}
            </div>
        </div>
    );
}

export default PhotoDock;