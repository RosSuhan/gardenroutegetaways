"use client"
import Link from "next/link"

type BigActionButtonProps = {
    buttonUrl: string; 
    background: string; 
    borderWidth: string; 
    borderColor: string; 
    maxWidth: string; 
    minWidth: string; 
    color: string; 
    buttonName: string;
}

export default function BigActionButton({buttonUrl, background, borderWidth, borderColor, maxWidth, minWidth, color, buttonName}: BigActionButtonProps){
    return(
        <>
            <Link
                href={buttonUrl}
                style={{
                    background:`${background}`,
                    borderWidth: `${borderWidth}`,
                    borderColor: `${borderColor}`,
                    borderStyle: "solid",
                    maxWidth: `${maxWidth}`,
                    minWidth: `${minWidth}`,
                    padding: "1rem 2rem",
                    fontSize: "2rem",
                    borderRadius:"8px",
                    textDecoration:"none",
                    textAlign:"center",
                    color:`${color}`,
                    cursor:"pointer",
                    marginRight:"2rem"
                }}
            >
                {buttonName}
            </Link>
        </>
    )
}