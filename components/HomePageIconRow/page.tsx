'use client'
import Styles from "./homePageIconRow.module.css"
import golf from "./golf1.png"
import stars from "./qualityLiving.png"
import scene from "./scenicarea.png"
import service from "./service-excellence.png"
import Image from "next/image"

const aboutList = [
    {
        img: stars,
        name: "LUXURY LIVING"
    },{
        img: scene,
        name: "SCENIC SERINITY"
    },{
        img: golf,
        name: "GOLFING PARADISE"
    },{
        img: service,
        name: "OUTSTANDING SERVICE"
    }
]

export default function HomePageIconRow(){
    return(
        <>
            <div
                className={Styles.aboutIconRow}
            >
                {aboutList.map(({img, name}, index) => (
                    <div
                        key={index}
                        className={Styles.iconBlock}
                    >
                        <Image
                            src={img.src}
                            alt={name}
                            width={500}
                            height={500}
                            className={Styles.iconImage}
                        />
                        
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}