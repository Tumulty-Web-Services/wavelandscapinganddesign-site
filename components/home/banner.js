import styles from 'styles/Banner.module.css';
import 'animate.css/animate.min.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h3
        className={`${styles.whiteTitle} animate__animated animate__slow animate__fadeInUp`}
      >
        Imagine your ideal outdoor space and
      </h3>
      <h3
        className={`${styles.blueTitle} animate__animated animate__slow animate__fadeInUp`}
      >
        <strong>start living it</strong>
      </h3>
    </div>
  );
}
