import Container from "react-bootstrap/Container";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <Container className="mt-3" fluid>
      <div className={styles.banner} />
    </Container>
  );
}
