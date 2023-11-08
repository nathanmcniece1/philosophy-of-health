// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Life.module.css'; // Importing the new CSS module

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
                    The Current Consensus
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    What Is Life?
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    What Makes Life Matter
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Why Death Is Bad
                </div>
            </div>
        </div>
    );
}

export default Life;
