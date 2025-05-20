'use client'
import BigActionButton from '../BigActionButton/BigActionButton'
import Styles from './homeHero.module.css'

export default function Homehero(){
    return(
        <>
            <div
                className={Styles.heroSection}
            >
                <div
                    className={Styles.heroBlock}
                >
                    <h1
                        className={Styles.heroHeading}
                    >
                        WELCOME TO GARDEN ROUTE GETAWAYS
                    </h1>

                    <h2
                        className={Styles.heroHeading2}
                    >
                        Premier Short-Term Holiday Rental Property Management
                    </h2>

                    <p
                        className={Styles.heroParagraph}
                    >
                        We are proud to say that we have a high-end Market reach which includes a mix of local travellers and international visitors.
                    </p>

                    <div
                        className={Styles.heroActionButtonRow}
                    >
                        <BigActionButton
                            buttonUrl="/accommodation"
                            background="transparent"
                            borderWidth="2px"
                            borderColor="#2686c0"
                            color="#000000"
                            buttonName="BOOK A PROPERTY"
                            maxWidth="300px"
                            minWidth="200px"
                        />

                        <BigActionButton
                            buttonUrl="/manage"
                            background="#2686c0"
                            borderWidth="2px"
                            borderColor="#2686c0"
                            color="#000000"
                            buttonName="Property Management"
                            maxWidth="300px"
                            minWidth="200px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}