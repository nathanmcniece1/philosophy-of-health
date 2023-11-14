import React from "react"
import styles from "./Footer.module.css"
import Link from "next/link"
import Image from "next/image"

function Footer({ nextTitle, nextPage}){
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <p className={styles.heading}>Next section:</p>
                    <p>{nextTitle}</p>
                </div>
                <div>
                <Link href={nextPage}>
                    <button className={styles.btn}>
                        Next 
                        <Image className={styles.img} src="/images/next.png" alt="Next" width={15} height={15} />
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;