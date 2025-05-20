"use client"
import { useState } from "react"
import Styles from "./review.module.css"
import { customerReviews } from "@/lib/customerReviews"
import FullStar from "@/components/icons/FullStar"
import HalfStar from "@/components/icons/HalfStar"

export default function Review(){
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 150;
    return (
        <>
            <section
                className={Styles.reviewSection}
            >
                {Array.isArray(customerReviews) && customerReviews.map((review, index)=>{
                    const toggleReadMore = () => {
                        setIsExpanded(!isExpanded);
                    };

                    const shouldTruncate = review.reviewText.length > MAX_LENGTH;
                    const displayedText = isExpanded
                    ? review.reviewText : review.reviewText.slice(0, MAX_LENGTH) + (shouldTruncate ? "..." : "");

                    return (
                        <div
                            className={Styles.reviewBlock}
                            key={index}
                        >
                            <div
                                className={Styles.ratingsBlock}
                            >
                                {Array.from({ length: review.starRating }, (_, i) => (
                                    <FullStar
                                        key={i}
                                    />
                                ))}
    
                                {review.halfstar? <HalfStar/> : null}
                            </div>
                            <p
                                className={Styles.reviewTextBlock}
                            >
                                {displayedText}
                                {shouldTruncate && (
                                    <button
                                        onClick={toggleReadMore}
                                        className={Styles.readMoreButton}
                                    >
                                        {isExpanded ? "Show less" : "Read more"}
                                    </button>
                                )}
                            </p>
                            <p
                                className={Styles.reviewerBlock}
                            >
                                {review.reviewName} 
                                {review.town && `, ${review.town}`}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}