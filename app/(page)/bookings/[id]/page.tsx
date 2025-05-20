'use client';
import Styles from "./webbooking.module.css"
import { useParams } from "next/navigation"
import { properties } from "@/lib/properties"
import BookingForm from '@/components/Form/BookingForm'

export default function Bookings(){
    const params = useParams();
    const id = params?.id;
    
        if(!id) return null;
    
        const allProperties = properties.flatMap(prop => {
            const nested = prop.moreProps || []
            return [prop, ...nested]
        })

    
        const property = allProperties.find(p => p.slug === id)

        const homeName = property?.propertyName
    
        if(!property) return <p>Property not found.</p>

    return (
        <main
            className={Styles.mainSection}
        >
            <div
                className={Styles.nameBanner}
            >
                <h2
                    className={Styles.propertyTitle}
                >
                    {homeName}
                </h2>
            </div>

            <BookingForm
                homeName = {homeName}
            />
        </main>
    )
}