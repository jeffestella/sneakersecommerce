import React, { useState } from 'react';
import photoBoxStyles from './PhotoBox.module.css';
import productPhoto1 from '../assets/image-product-1.jpg';
import productPhoto2 from '../assets/image-product-2.jpg';
import productPhoto3 from '../assets/image-product-3.jpg';
import productPhoto4 from '../assets/image-product-4.jpg';
import productThumb1 from '../assets/image-product-1-thumbnail.jpg';
import productThumb2 from '../assets/image-product-2-thumbnail.jpg';
import productThumb3 from '../assets/image-product-3-thumbnail.jpg';
import productThumb4 from '../assets/image-product-4-thumbnail.jpg';
import Modal from './Modal';

const PhotoBox = ({ photos }) => {

    const [currentPhoto, setCurrentPhoto] = useState(productPhoto1);
    const [modalActive, setModalActive] = useState(false);

    const thumbs = photos.map((photo) => {
        return (
            <div
                className={`
                    ${currentPhoto === photo.photo ?
                        photoBoxStyles.selected :
                        ''
                    } ${photoBoxStyles.thumbnail}`}
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

