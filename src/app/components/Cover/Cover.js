import Image from "next/image";
import styles from './Cover.module.css';

function Cover() {
    return (
      <div className={styles.container}>
        <Image
          className={styles.cover}
          src="/images/cover.png"
          width={250}
          height={350}
          alt="Cover"
        />
      </div>
    )
}

export default Cover;