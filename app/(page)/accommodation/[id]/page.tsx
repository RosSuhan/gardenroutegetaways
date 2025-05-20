"use client"
import Styles from './singleProp.module.css'
import Hero from "@/components/Hero/SinglePropHero"
import PropertyBlock from '@/components/PropertyBlock/PropertyBlock'
import { properties } from '@/lib/properties'
import type { PropertyType } from '@/lib/types';
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ImageSlider from '@/components/ImageSlider/page'


export default function SinglePropertyPage(){
    const params = useParams();
    const id = params?.id;
    
    if (!id) return null;

    const allProperties = properties.flatMap(prop => {
        const nested = prop.moreProps || []
        return [prop, ...nested]
    })

    const property = allProperties.find(p => p.slug === id) as PropertyType;

    if(!property) return <p>Property not found.</p>

    const longDescText = property.longDesc

    return(
        <>
            <main
                className={Styles.pageMain}
            >
                <Hero
                    propertyName={property.propertyName}
                    heroImage={property.heroImage}
                    imageWidth={property.imageWidth}
                    imageHeight={property.imageHeight}
                    type={property.type}
                    area={property.area}
                    multiUnits={property.multiUnits}
                    guests={property.guests}
                    bedroom={property.bedroom}
                    bathroom={property.bathroom}
                />

                {property.multiUnits? null : 
                <>
                    <div
                        className={Styles.bookingBtnRow}
                    >
                        <p
                            className={Styles.ratesBlock}
                        >
                            {property.rates}
                        </p>

                        {property.nightsbridge? 
                            <Link
                                href={`/booking/${property.slug}`}
                                className={Styles.bookingBtn}
                            >
                                Check Availability
                            </Link> 
                            :
                            <Link
                                href={`/bookings/${property.slug}`}
                                className={Styles.bookingBtn}
                            >
                                Check Availability
                            </Link>
                        }
                    </div>
                    <div
                        className={Styles.galleryBlock}
                    >
                        <ImageSlider
                            galleryImages={property.propImages || []}
                        />
                    </div>
                </>}

                <article
                    className={Styles.pageArticle}
                >
                    <div dangerouslySetInnerHTML={{ __html: longDescText}}/>
                </article>

                {property.multiUnits ? 
                    <div
                        className={Styles.morePropsRowBlock}
                    >
                        <h2
                            className={Styles.morePropsRowHeading}
                        >
                            Explore our available holiday units within {property.propertyName} and find your perfect home away from home.
                        </h2>
                        {property.moreProps?.map((prop, index) => (
                            <PropertyBlock
                            key={index}
                            slug={prop.slug}
                            heroImage={prop.heroImage}
                            imageWidth={prop.imageWidth}
                            imageHeight={prop.imageHeight}
                            propertyName={prop.propertyName}
                            multiUnits={prop.multiUnits}
                            guests={prop.guests}
                            bedroom={prop.bedroom}
                            bathroom={prop.bathroom}
                            shortDesc={prop.shortDesc}
                            />
                        ))}
                    </div> : null}
            </main>
        </>
    )
}