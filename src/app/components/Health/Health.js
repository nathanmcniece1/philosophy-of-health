// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Health.module.css'; // Importing the new CSS module
import Link from 'next/link';

function Health() {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.introHeading}>
                What Is Health?
            </h2>
            <div className={styles.gridContainer}>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/framing">Framing the Problem</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/sickness">Health as the Absence of Sickness</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/homeostasis">Health as Homeostasis</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/positive">Towards a Positive Conception of Health</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/wellbeing">Health as Well-Being</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/freedom">Health as Freedom</Link>
                </div>
            </div>
        </div>
    );
}

export default Health;
