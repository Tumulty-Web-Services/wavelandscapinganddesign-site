import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from 'styles/Service.module.css';

export default function ServiceDescriptionLeft({
  title, content, image, height, width, link,
}) {
  return (
    <Row className="my-4" id={link}>
      <Col sm={12} md={6}>
        <Image
          src={image}
          width={width}
          height={height}
          alt={title}
          layout="intrinsic"
        />
      </Col>
      <Col sm={12} md={6} className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{content}</p>
      </Col>
    </Row>
  );
}
