"use client"

import Link from 'next/link';
import clsx from 'clsx';
import Styles from './header.module.css';
import Image from 'next/image';
import { BaselineFacebook } from '@/components/icons/Facebook';
import { Instagram } from '@/components/icons/Instagram';
import { BaselineAttachEmail } from '@/components/icons/Mail';
import Menu from './Menu';
import { useState } from 'react';

export default function Header(){

    const [ isOpen, setIsOpen ] = useState(false)

    const handleMenuToggle = () => {
        console.log("menu button clicked")
        setIsOpen(!isOpen)
    }
    return (
        <header 
            className={Styles.header}
        >
            <div 
                className={Styles.headerTopRow}
            >
                <div 
                    className={Styles.headerSocialBlock}
                >
                    <span>Follow Us:</span>

                    <Link 
                        href="https://web.facebook.com/profile.php?id=61559515682161" 
                        title="Facebook Link" 
                        className={Styles.headerSocialLink}
                    >
                        <BaselineFacebook/>
                    </Link>
                    
                    <Link 
                        href="https://www.instagram.com/gr.getaway/?hl=en" 
                        title="Instagram Link" 
                        className={Styles.headerSocialLink}>
                        <Instagram/>
                    </Link>
                </div>
        
                <Link 
                    href="mailto:bookings@gardenroutegetaways.co.za" 
                    title="Email Link" 
                    className={Styles.headerSocialMail}
                >
                    <BaselineAttachEmail
                        width="2em"
                        height="1em"
                    />
                    <span 
                        className="headerSocialMailName"
                    >
                        bookings@gardenroutegetaways.co.za
                    </span>
                </Link>
            </div>
            <div
                className={Styles.headerBottomRow}
            >
                <Link
                    href={"/"}
                    title='Home'
                >
                    <Image 
                        src='/garden-route-getaways-color-logo.webp'
                        alt='Garden Route Getaways logo'
                        width={100}
                        height={70}
                        style={{objectFit: "contain"}}
                    />
                </Link>


                <nav 
                    className={clsx(Styles.navBlock, { [Styles.mobileNavBlock]: isOpen })}
                    >
                    <Menu
                        menuStatus={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </nav>
                
                <button
                    type='button'
                    className={Styles.mobileButton}
                    onClick={handleMenuToggle}
                >
                    Menu
                </button>
            </div>
        </header>
    )
}