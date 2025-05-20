import Image from 'next/image'
import Styles from './content.module.css'
import contentImage1 from '@/public/service01.webp'
import contentImage2 from '@/public/checkingIn.webp'
import contentImage3 from '@/public/service03.webp'

export default function Content(){
    return (
        <article 
            className={Styles.propManKeys}
        >
            <h2 
                className={Styles.propManHeading}
            >
                    A property management company you can trust
            </h2>
            
            <div 
                className={Styles.contentBlock}
            >
                <div 
                    className={Styles.imageBlock}
                >
                    <Image
                        src={contentImage1}
                        alt=''
                        width={600}
                        height={400}
                        className={Styles.contentImage}
                    />
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Property Listing and Marketing:
                    </h3>
                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We create attractive listings for all our properties that we manage on various online platforms such as Airbnb, Booking.com, Lekkerslaap, and our website. We optimize these listings with professional photography, compelling descriptions, and competitive pricing to attract potential guests.
                    </p>
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Guest Communication and Booking Management:
                    </h3>

                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We handle all guest inquiries, bookings, and communications before, during, and after the stay. We promptly respond to inquiries, manage reservations, process payments, and coordinate check-in and check-out procedures.
                    </p>
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Guest Services and Support:
                    </h3>
                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We offer guest services such as recommendations for local attractions, dining, and activities, and 24/7 guest support for any emergencies or issues that may arise during a guest&apos;s stay.
                    </p>
                </div>
                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Key Exchange and Check-in/Check-out:
                    </h3>

                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We manage the logistics of key exchange or keyless entry for guests, ensuring a smooth check-in process. We also provide guests with welcome packets containing important information about the property, local attractions, and emergency contacts.
                    </p>
                </div>

                <div 
                    className={Styles.imageBlock}
                >
                    <Image
                        src={contentImage2}
                        alt=''
                        width={600}
                        height={400}
                        className={Styles.contentImage}
                    />
                </div>
                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Cleaning and Maintenance:
                    </h3>
                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        One of the key responsibilities is ensuring that your property is clean, well-maintained, and in good condition for each guest&apos;s arrival. We schedule regular cleanings, conduct property inspections, and promptly address any maintenance issues that arise during a guest&apos;s stay.
                    </p>
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Feedback and Reviews Management:
                    </h3>

                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We solicit feedback from guests after their stay and manage online reviews to maintain a positive reputation for the property. We address any negative feedback promptly and strive to continuously improve the guest experience.
                    </p>
                </div>

                <div 
                    className={Styles.imageBlock}
                >
                    <Image
                        src={contentImage3}
                        alt=''
                        width={600}
                        height={400}
                        className={Styles.contentImage}
                    />
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                            Financial Management and Reporting:
                    </h3>

                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We handle all financial aspects of the rental property, including collecting rental income, deducting management fees and expenses, and providing property owners with detailed financial reports and statements regularly.
                    </p>
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                        Revenue Management and Pricing Optimization:
                    </h3>
                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We constantly monitor market trends, demand fluctuations, and competitor pricing to optimize rental rates and maximize revenue for property owners. This may involve adjusting rates dynamically based on factors such as seasonality, local events, and supply and demand dynamics.
                    </p>
                </div>

                <div 
                    className={Styles.wordBlock}
                >
                    <h3 
                        className={Styles.wordBlockHeading}
                    >
                            Legal Compliance and Regulation:
                    </h3>

                    <p 
                        className={Styles.wordBlockparagraph}
                    >
                        We ensure that the property complies with all local regulations, zoning laws, building codes, and licensing requirements for short-term rentals. We stay updated on changes in regulations and advise property owners accordingly to avoid any legal issues.
                    </p>
                </div>
            </div>
        </article>
    )
}