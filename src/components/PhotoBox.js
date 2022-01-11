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

const PhotoBox = () => {
    const photos = [
        {
            photo: productPhoto1,
            thumb: productThumb1,
            alt: "white and brown sneakers"
        },
        {
            photo: productPhoto2,
            thumb: productThumb2,
            alt: "white and brown sneakers"
        },
        {
            photo: productPhoto3,
            thumb: productThumb3 ,
            alt: "white and brown sneakers"
        },
        {
            photo: productPhoto4,
            thumb: productThumb4,
            alt: "white and brown sneakers"
        },
    ]

    const [currentPhoto, setCurrentPhoto] = useState(productPhoto1);

    const thumbs = photos.map((photo) => {
        return (
            <img 
                className={`
                    ${currentPhoto===photo.photo?
                        photoBoxStyles.selected :
                        ''
                    } ${photoBoxStyles.thumbnail}`}
                src={photo.thumb} 
                alt={photo.alt} 
                onClick={() => {setCurrentPhoto(photo.photo)}}
            />
        )
    })

    return(
        <div className={photoBoxStyles.container}>
            <div>
                <img 
                    className={photoBoxStyles.current}
                    src={currentPhoto} 
                    alt="pair of white sneakers and brown sneakers with orange accents"
                />
            </div>
            <div className={photoBoxStyles.thumbnails}>
                {thumbs}
            </div>
        </div>
    );
}

export default PhotoBox;

