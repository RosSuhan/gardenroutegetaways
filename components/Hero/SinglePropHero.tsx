"use client"
import Image from 'next/image'
import Styles from './hero.module.css'
type heroProps = {
    propertyName: string;
    heroImage: string;
    imageWidth: number;
    imageHeight: number;
    type: string;
    area: string;
    multiUnits: boolean;
    guests: string;
    bedroom: string;
    bathroom: string;
}
export default function Hero({
    propertyName,
    heroImage,
    imageWidth,
    imageHeight,
    type,
    area,
    multiUnits,
    guests,
    bedroom,
    bathroom
}: heroProps){
    return(
        <>
            <div
                className={Styles.heroSection}
            >
                <Image
                    src={heroImage}
                    alt={`Image of ${propertyName}`}
                    width={imageWidth}
                    height={imageHeight}
                    className={Styles.heroBackgroundImage}
                />

                <div
                    className={Styles.heroOverlay}
                >
                    <h1
                        className={Styles.propertyHeading}
                    >
                        {propertyName}
                    </h1>

                    <h2
                        className={Styles.propertySubHeading}
                    >
                        {`${type} in ${area}`}
                    </h2>

                    <div
                        className={Styles.shortInfoRow}
                    >
                        {multiUnits? null : `${guests} GUESTS | ${bedroom} BEDROOM | ${bathroom} BATHS`}
                    </div>
                </div>
            </div>
        </>
    )
}