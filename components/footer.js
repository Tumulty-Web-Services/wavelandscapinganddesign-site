/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div className="d-flex py-4">
              <div className="me-5">
                <h4 className={styles.title}>Navigation</h4>
                <ul className={`${styles.footerList} list-unstyled`}>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml">
                      <a>Sitemaps</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-5">
                <h4 className={styles.title}>Social Media</h4>
                <ul className={`${styles.footerList} list-unstyled`}>
                  <li>
                    <Link href="/services">
                      <a>Facebook</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Instagram</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>Tik Tok</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-5">
                <h4 className={styles.title}>Contact</h4>
                <ul className={`${styles.footerList} list-unstyled`}>
                  <li>
                    <p className="mb-0 mt-3">
                      <strong className={styles.blueTitle}>Email: </strong>
                      wavelandscapingdesign@gmail.com
                    </p>
                    <p>
                      <strong className={styles.blueTitle}>Phone: </strong>
                      516-319-3145
                    </p>
                    <p>
                      <strong className={styles.blueTitle}>
                        Based out of Palm Beach, Florida
                      </strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <Image
              src="/images/west-palm-beach.png"
              height={305}
              width={513}
              alt="West Palm Beach, Florida"
              layout="intrinsic"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
