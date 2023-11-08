import styles from './Title.module.css';

function Title(){
    return (
        <div className={styles.title}>
        <p className={styles.light}>The Philosophy of</p>
        <h1 className={styles.health}>HEALTH</h1>
        </div>
    )
}

export default Title;