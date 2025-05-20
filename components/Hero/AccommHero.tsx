import Styles from './homeHero.module.css'

export default function AccommHero(){
    return(
        <>
            <div
                className={Styles.accommHeroSection}
            >
                <div
                    className={Styles.heroBlock}
                >
                    <h1
                        className={Styles.heroHeading}
                    >
                        Your Home Away From Home Is One Click Away
                    </h1>

                    <p
                        className={Styles.heroParagraph}
                    >
                        The Garden Route is a premier destination for discerning travelers seeking the perfect blend of luxury, natural beauty, and unforgettable experiences. This stunning region, nestled along South Africa&apos;s southeastern coastline, offers a captivating mix of pristine beaches, world-class golf estates, and renowned tourist attractions. Whether you&apos;re looking for a peaceful family retreat or a sophisticated getaway, the Garden Route provides the ideal setting for relaxation and adventure alike. With its exquisite landscapes and close proximity to cultural and outdoor activities, it&apos;s no wonder that visitors often extend their stay to truly immerse themselves in this unparalleled destination.
                    </p>
                </div>
            </div>
        </>
    )
}