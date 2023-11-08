import React from "react"
import Image from "next/image"
import styles from "./Buttons.module.css"

function Buttons(){
    
    return (
    <div className={styles.container}>
        <button className={styles.buttons}>
        <Image 
        className={styles.read}
        src="/images/read.png" 
        width={20}
        height={20}
        />Read</button>
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