/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <Row>
          <Col sm={12} md={6} className="py-4">
            <div className="d-flex flex-column flex-md-row">
              <div className="me-5">
                <h4 className={styles.title}>
                  <small>Navigation</small>
                </h4>
                <ul className={`${styles.footerList} list-unstyled`}>
                  <li>
                    <Link href="/services">
                      <small><a>Services</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <small><a>Gallery</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <small><a>Careers</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <small><a>Contact</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml">
                      <small><a>Sitemaps</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <small><a>Privacy Policy</a></small>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="me-5">
                <h4 className={styles.title}>
                  <small>Social Media</small>
                </h4>
                <ul className={`${styles.footerList} list-unstyled`}>
                  <li>
                    <Link href="/services">
                      <small><a>Facebook</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <small><a>Instagram</a></small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <small><a>Tik Tok</a></small>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.title}>
                  <small>Contact</small>
                </h4>
                <ul className={`${styles.footerList} list-unstyled`}>
                  <li>
                    <p className="mb-0 mt-3">
                      <small>
                        <strong className={styles.blueTitle}>Email: </strong>
                        wavelandscapingdesign@gmail.com
                      </small>
                    </p>
                    <p>
                      <small>
                        <strong className={styles.blueTitle}>Phone: </strong>
                        516-319-3145
                      </small>
                    </p>
                    <p>
                      <small>
                        <strong className={styles.blueTitle}>
                          Based out of Palm Beach, Florida
                        </strong>
                      </small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}  className="py-4">
            <Image
              src="/images/west-palm-beach-1193x693.png"
              alt="West Palm Beach, FL"
              width={1193}
              height={693}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className={`${styles.bottomFooter} px-0 pt-2`}>
            Copyright ©️
            {' '}
            {year}
            .
            Content, including images, displayed on this website is protected by copyright laws. Downloading, republication, retransmission or reproduction of content on this website is strictly prohibited.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
