// Introduction.js
import React from 'react';
import Image from 'next/image';
import styles from './Mentalhealth.module.css';

function MentalHealth() {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.introHeading}>
                On Mental Health
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
                    The Irreconcilability of Other Minds
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    Mental Health As Brain Health
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    The Mind-Body Unity
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    The Physical
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    The Emotional
                </div>
                <div className={styles.gridRow}>
                    <Image 
                        className={styles.share} 
                        src="/images/arrow.png" 
                        alt="Arrow Icon" 
                        width={30} 
                        height={30}
                    />
                    The 'Spiritual'
                </div>
            </div>
        </div>
    );
}

export default MentalHealth;
