// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Introduction.module.css'; // Importing the new CSS module
import Link from 'next/link';

function Introduction() {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.introHeading}>
                Introduction
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
                    <Link href="/preface">Preface</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/welcome">Welcome To Philosophy</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/philosophy">What Is Philosophy?</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/lifephilosophy">A 'Philosophy of Life'</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/deadphilosophy">Philosophy Is Dead, So What?</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/philosophyofhealth">The Philosophy Of Health</Link>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
