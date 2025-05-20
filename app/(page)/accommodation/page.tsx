"use client"
import PropertyBlock from '@/components/PropertyBlock/PropertyBlock'
import Styles from './accom.module.css'
import AccommHero from '@/components/Hero/AccommHero'
import {properties} from "@/lib/properties"

export default function AccomPage(){
    return(
        
            <main
                className={Styles.main}
            >
                <AccommHero/>

                <section
                    className={Styles.accomBlock}
                >
                    {properties.map(({
                        slug,
                        heroImage,
                        imageWidth,
                        imageHeight,
                        propertyName,
                        multiUnits,
                        guests,
                        bedroom,
                        bathroom,
                        shortDesc
                    }, index) => (
                        <PropertyBlock
                            key={index}
                            slug={slug}
                            heroImage={heroImage}
                            imageWidth={imageWidth}
                            imageHeight={imageHeight}
                            propertyName={propertyName}
                            multiUnits={multiUnits}
                            guests={guests}
                            bedroom={bedroom}
                            bathroom={bathroom}
                            shortDesc={shortDesc}
                        />
                    ))}
                </section>
            </main>
    )
}