import React, { useState } from 'react';
import photoBoxStyles from './PhotoBox.module.css';
import Modal from './Modal';

const PhotoBox = ({ photos }) => {
    const defaultPhoto = photos[0].photo
    const [currentPhoto, setCurrentPhoto] = useState(defaultPhoto);
    const [modalActive, setModalActive] = useState(false);

    const thumbs = photos.map((photo) => {
        return (
            <div
                className={`
                    ${currentPhoto === photo.photo ?
                        photoBoxStyles.selected :
                        ''
                    } ${photoBoxStyles.thumbnail}`}
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

    return(
        <div className={photoBoxStyles.container}>
            <Modal 
                modalActive={modalActive}
                setModalActive={setModalActive}
                photos={photos} 
                outerPhoto={currentPhoto}
                thumbs={thumbs}
            />
            <div>
                <img 
                    className={photoBoxStyles.current}
                    src={currentPhoto} 
                    alt="pair of white sneakers and brown sneakers with orange accents"
                    onClick={()=>{setModalActive(true)}}
                />
            </div>
            <div className={photoBoxStyles.thumbnails}>
                {thumbs}
            </div>
        </div>
    );
}

export default PhotoBox;

