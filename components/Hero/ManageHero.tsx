import Styles from './homeHero.module.css'

export default function ManageHero(){
    return(
        <>
            <div
                className={Styles.manageHeroSection}
            >
                <div
                    className={Styles.heroBlock}
                >
                    <h1
                        className={Styles.heroHeading}
                    >
                        Let us manage your Property for you
                    </h1>

                    <p
                        className={Styles.heroParagraph}
                    >
                        We understand that guests are expecting authentic holiday experiences, quality accommodation and personalised services.
                    </p>
                </div>
            </div>
        </>
    )
}