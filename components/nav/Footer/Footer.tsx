import { Instagram } from '@/components/icons/Instagram'
import Styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BaselineFacebook } from '@/components/icons/Facebook'
import { BaselineAttachEmail } from '@/components/icons/Mail'
import { Phone } from '@/components/icons/Phone'
import { WhatsappIcon } from '@/components/icons/WhatsappIcon'

export default function Footer(){
    return(
        <footer
            className={Styles.footer}
            id='contact'
        >
            <div 
                className={Styles.footerImageBlock}
            >
                <Image
                    src="/gardenRouteGetaways.webp"
                    alt='Garden Route Getaways Logo'
                    width={200}
                    height={200}
                    style={{objectFit:"contain"}}
                    className={Styles.footerLogo}
                />
            </div>

            <div
                className={Styles.footerBlock}
            >
                <div
                    className={Styles.footerNavBlock}
                >
                    <Link
                        href={'/accommodation'}
                        title='Accommodation'
                        className={Styles.footerNavLink}
                    >
                        Accommodation
                    </Link>
                    <Link
                        href={'/manage'}
                        title='Manage'
                        className={Styles.footerNavLink}
                    >
                        Manage
                    </Link>
                </div>

                <div
                    className={Styles.footerIconBlock}
                >
                    <Link
                        href={'mailto:info@gardenroutegetaways.co.za'}
                    >
                        <BaselineAttachEmail
                            color="#ffffff"
                            width="2em"
                            height="2em"
                        />
                    </Link>
                    <Link
                        href={'tel:+27795137702'}
                    >
                        <Phone
                            color="#ffffff"
                            width="2em"
                            height="2em"
                        />
                    </Link>
                    <Link
                        href={'https://web.facebook.com/profile.php?id=61559515682161'}
                    >
                        <BaselineFacebook
                            color="#ffffff"
                            width="2em"
                            height="2em"
                        />
                    </Link>
                    <Link
                        href={'https://www.instagram.com/gr.getaway/?hl=en'}
                    >
                        <Instagram
                            color="#ffffff"
                            width="2em"
                            height="2em"
                        />
                    </Link>
                </div>

                <p
                    className={Styles.footerPraise}
                >
                    We give all praise and glory to the Lord. It is through His grace that Garden Route Getaways are where we are today. We believe and trust that He will continue to bless our business.
                </p>
            </div>

            <div
                className={Styles.footerImageBlock}
            >
                <Link
                    href={"https://wa.me/+27795137702"}
                >
                    <WhatsappIcon
                        width="6em"
                        height="6em"
                        className={Styles.footerWhatsapp}
                    />
                </Link>
            </div>
            
            <div
                className={Styles.footerReserveRow}
            >
                All Rights Resevered &copy; {new Date().getFullYear()} - Garden Route Getaways
            </div>
        </footer>
    )
}