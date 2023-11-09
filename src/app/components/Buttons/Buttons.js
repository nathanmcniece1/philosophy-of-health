import React from "react"
import Image from "next/image"
import styles from "./Buttons.module.css"
import Link from "next/link"

function Buttons(){
    
    return (
    <div className={styles.container}>
        <Link href="preface">
        <button className={styles.buttons}>
        <Image 
        className={styles.read}
        src="/images/read.png" 
        width={20}
        height={20}
        />Read</button>
        </Link>
        <button className={styles.buttons}>
            <Image 
        className={styles.read}
        src="/images/download.png" 
        width={20}
        height={20}
        />Download</button>
    </div>
    )
}

export default Buttons