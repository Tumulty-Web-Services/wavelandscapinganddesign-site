import styles from 'styles/BackPageBanner.module.css';
import 'animate.css/animate.min.css';

export default function Banner({ title }) {
  return (
    <div className={styles.banner}>
      <div
        className={`${styles.titleContainer}  animate__animated animate__slow animate__fadeInUp`}
      >
        <h3 className={styles.whiteTitle}>{title}</h3>
      </div>
    </div>
  );
}
