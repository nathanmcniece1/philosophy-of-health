import React from 'react';
import styles from './Download.module.css';
import Image from 'next/image';

function Download() {
    return (
        <div className={styles.menuIcon}>
            <Image 
                src="/images/share.png"
                width={20}
                height={20}
                alt="Contents"
            />
        </div>
    );
}

export default Download;
