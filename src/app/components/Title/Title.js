import styles from './Title.module.css';
import Link from 'next/link';

function Title() {
    return (
        <div className={styles.title}>
            <Link href="/">
                    <p className={styles.light}>The Philosophy of</p>
                    <h1 className={styles.health}>HEALTH</h1>
            </Link>
        </div>
    );
}

export default Title;
