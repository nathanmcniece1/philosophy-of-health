import React from 'react';
import styles from './MenuIcon.module.css';
import Image from 'next/image';

function MenuIcon() {
    return (
        <div className={styles.menuIcon}>
            <Image 
                src="/images/index.png"
                width={20}
                height={20}
                alt="Contents"
            />
        </div>
    );
}

export default MenuIcon;
