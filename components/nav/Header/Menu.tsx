"use client"
import Styles from './menu.module.css'
import Link from 'next/link'
import { navLinkPath } from '@/lib/menuBlock'

type MenuProps = {
    menuStatus: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({setIsOpen }: MenuProps){
    return(
        
            <ul
                className={Styles.navList}
            >
                {navLinkPath.map(({name, path, subMenu}, index)=>(
                    <li
                        key={index}
                        className={Styles.navItem}
                    >
                        <Link
                            href={path}
                            title={name}
                            className={Styles.navLink}
                            onClick={() => setIsOpen(false)}
                        >
                            {name}
                        </Link>
                        <ul
                            className={Styles.subNavList}
                        >
                            {subMenu?.map((acprop, subIndex) => (
                                <li
                                    key={subIndex}
                                    className={Styles.subNavItem}
                                >
                                    <a
                                        href={`${path}/${acprop.slug}`}
                                        title={acprop.propertyName}
                                        className={Styles.subNavLink}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {acprop.propertyName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
    )
}