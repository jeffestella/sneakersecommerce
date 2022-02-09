import productPhoto1 from '../assets/image-product-1.jpg';
import productPhoto2 from '../assets/image-product-2.jpg';
import productPhoto3 from '../assets/image-product-3.jpg';
import productPhoto4 from '../assets/image-product-4.jpg';
import productThumb1 from '../assets/image-product-1-thumbnail.jpg';
import productThumb2 from '../assets/image-product-2-thumbnail.jpg';
import productThumb3 from '../assets/image-product-3-thumbnail.jpg';
import productThumb4 from '../assets/image-product-4-thumbnail.jpg';

export const products = [
    {
        name: "Fall Limited Edition Sneakers",
        id: "fles",
        manufacturer: 'Sneaker Company',
        blurb: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        priceCurrent: 125,
        discount: 0.5,
        priceOriginal: 250,
        photos: [
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
                thumb: productThumb3,
                alt: "white and brown sneakers"
            },
            {
                photo: productPhoto4,
                thumb: productThumb4,
                alt: "white and brown sneakers"
            }
        ]
    }
]