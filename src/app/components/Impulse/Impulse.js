// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Impulse.module.css';

function Impulse() {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.introHeading}>
                The Enhancement Impulse
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
                    The Pursuit of 'Better'
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    The Duality of Enhancement
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Culture & Competitiveness
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Getting Our Minds Right
                </div>
            </div>
        </div>
    );
}

export default Impulse;
