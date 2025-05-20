"use client"
import HomePageIconRow from '../HomePageIconRow/page'
import Styles from './homepageAbout.module.css'

export default function HomepageAbout(){
    return(
        <>
            <section
                className={Styles.aboutSection}

            >
                <p 
                    className={Styles.aboutParagraph}
                >
                    Welcome to GARDEN ROUTE GETAWAYS, your premier short-term holiday rental property management company nestled in the breathtaking Garden Route of South Africa. Born from a deep passion for property management and a commitment to excellence, we have embarked on a journey to redefine hospitality in this picturesque region.
                </p>
                <p
                    className={Styles.aboutParagraph}
                >
                    It is a well-known fact that the Western Cape&apos;s Garden Route is the most popular holiday destination in the world. Therefore, it is a brilliant idea to open up your holiday home into an income stream. Your biggest problem now is to get someone reputable to help you manage your accommodation. Garden Route Getaways is the answer to your needs.
                </p>

                <HomePageIconRow/>
            </section>
        </>
    )
}