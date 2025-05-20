"use client"
import Image from 'next/image'
import Styles from './imageSlider.module.css'
import { useState } from 'react'

type ImageItem = {
    image: string;
    alt: string;
    width: number;
    height: number;
}

interface ImageSliderProps {
    galleryImages: ImageItem[];
}

export default function ImageSlider({galleryImages}: ImageSliderProps){
    const [currentIndex, setCurrentIndex ] = useState(0)

    const handleArrowClick = (direction: number) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = galleryImages.length - 1;
        if (newIndex >= galleryImages.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }
    return (
        <>
            {/* main image */}
            <div
                className={Styles.mainImageBlock}
            >
                <Image
                    src={galleryImages[currentIndex].image}
                    alt={galleryImages[currentIndex].alt}
                    width={galleryImages[currentIndex].width}
                    height={galleryImages[currentIndex].height}
                    className={Styles.mainImage}
                />

                
            </div>
            {/* Navigation Arrows */}
            <div 
                className={Styles.navigationButtons}
            >
                <button className={Styles.arrow} onClick={() => handleArrowClick(-1)}>
                    &#10094;
                </button>
                <button className={Styles.arrow} onClick={() => handleArrowClick(1)}>
                    &#10095;
                </button>
            </div>

            <div
                className={Styles.thumbnailRow}
            >
                {galleryImages.map((img, index)=>(
                    <div
                        key={index}
                        className={Styles + "." + `${index === currentIndex ? "liveImage" : "fadedImage"}`}
                        onClick={() => goToSlide(index)}
                    >
                        <Image
                            src={img.image}
                            alt={img.alt}
                            width={100}
                            height={80}
                            className={Styles.thumbnailImage}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}