// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Desire.module.css';

function Desire() {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.introHeading}>
                The Metaphysics of Desire
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
                    What Is Desire?
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Maslow's Hierarchy of *Desires*
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Nietzsche's 'Will to Power'
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Idle Speculations
                </div>
            </div>
        </div>
    );
}

export default Desire;
