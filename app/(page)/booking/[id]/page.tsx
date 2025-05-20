"use client"
import { useParams } from 'next/navigation'
import Styles from './booking.module.css'
import { properties } from "@/lib/properties"

export default function BookingSinglePage(){
    const params = useParams();
    const id = params?.id;

    if(!id) return null;

    const allProperties = properties.flatMap(prop => {
        const nested = prop.moreProps || []
        return [prop, ...nested]
    })

    const property = allProperties.find(p => p.slug === id)

    if(!property) return <p>Property not found.</p>

    return(
        <>
            <main
                className={Styles.main}
            >
                <iframe 
                    src={property.nightsbridge}
                    allowFullScreen
                    className={Styles.bookingForm}
                ></iframe>
            </main>
        </>
    )
}