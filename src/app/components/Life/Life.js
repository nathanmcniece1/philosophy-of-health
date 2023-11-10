// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Life.module.css'; // Importing the new CSS module
import Link from 'next/link';

function Life() {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.introHeading}>
                Why Life Is Good
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
                    <Link href="/consensus">The Current Consensus</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/lifeisgood">Life Is Good</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    <Link href="/whatislife">What Is Life?</Link>
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                  <Link href="/deathisbad">Death Is Bad</Link>
                </div>
            </div>
        </div>
    );
}

export default Life;
