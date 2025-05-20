"use client"
import Image from "next/image"
import Styles from "./propertyBlock.module.css"
import Link from "next/link"
import { useState } from "react"
type propertyBlockProps = {
    multiUnits: boolean;
    heroImage: string; 
    imageWidth: number;
    imageHeight: number;
    guests: string;
    bedroom: string;
    bathroom: string;
    propertyName: string;
    shortDesc: string;
    slug: string;
}
export default function PropertyBlock({
    multiUnits,
    heroImage, 
    imageWidth,
    imageHeight,
    guests, 
    bedroom,
    bathroom,
    propertyName,
    shortDesc,
    slug
}: propertyBlockProps){
    const [isMore, setIsMore ] = useState(false)
    const MAX_LENGTH = 150;

    const toggleReadMore = () => {
        setIsMore(!isMore)
    }

    const shouldTruncate = shortDesc.length > MAX_LENGTH;
    const displayedText = isMore ? shortDesc : shortDesc.slice(0, MAX_LENGTH) + (shouldTruncate ? "..." : "");
    return(
        <>
            <Link
                href={`/accommodation/${slug}`}
                className={Styles.propBlock}
            >
                <Image
                    src={heroImage}
                    alt={`Image of ${propertyName}`}
                    width={imageWidth}
                    height={imageHeight}
                    className={Styles.propImage}
                />

                <div
                    className={Styles.propShortInfo}
                >
                    {multiUnits? "Multiple Units Available" : `${guests} GUESTS | ${bedroom} BEDROOM | ${bathroom} BATHS`}
                </div>

                <h2
                    className={Styles.PropertyNameBlock}
                >
                    {propertyName}
                </h2>

                <p
                    className={Styles.shortDescBlock}
                >
                    {displayedText}
                    {shouldTruncate && (
                        <button
                            type="button"
                            onClick={toggleReadMore}
                            className={Styles.readMoreBtn}
                        >
                            {isMore ? "Show less" : "Read More"}
                        </button>
                    )}
                </p>
            </Link>
        </>
    )
}