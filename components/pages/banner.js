import styles from 'styles/Banner.module.css';
import 'animate.css/animate.min.css';

export default function Banner({ title }) {
  return (
    <div className={styles.banner}>
      <h3
        className={`${styles.whiteTitle} animate__animated animate__slow animate__fadeInUp`}
      >
        {title}
      </h3>
    </div>
  );
}
