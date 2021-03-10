/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from 'styles/Service.module.css';
import imageSourceFormatter from 'utils/image-source-format';

export default function ServiceDescriptionRight({
  title,
  content,
  image,
  height,
  width,
  link,
}) {
  return (
    <Row className="my-4" id={link}>
      <Col sm={12} md={6} className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{content}</p>
        {link === 'landscape-design' && (
          <Link href="landscape-designs">
            <a>
              <strong className={styles.greenLink}>
                <u>Check out more of our designs!</u>
              </strong>
            </a>
          </Link>
        )}
      </Col>
      <Col sm={12} md={6} className="mb-5">
        <Image
          src={imageSourceFormatter(`/services/${image}`)}
          width={width}
          height={height}
          alt={title}
          layout="intrinsic"
        />
      </Col>
    </Row>
  );
}
