/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/Footer.module.css';
import imageSourceFormatter from 'utils/image-source-format';

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
                      <a>
                        <small>Services</small>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>
                        <small>Gallery</small>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>
                        {' '}
                        <small>Careers</small>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>
                        <small>Contact</small>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="/sitemap.xml">
                      <small>Sitemap</small>
                    </a>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>
                        <small>Privacy Policy</small>
                      </a>
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
                    <Link href="https://www.facebook.com/wavelandscapingdesign">
                      <a>
                        <small>Facebook</small>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/wavelandscapingdesign">
                      <a>
                        {' '}
                        <small>Instagram</small>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.tiktok.com/@wavelandscapingdesign">
                      <a>
                        {' '}
                        <small>Tik Tok</small>
                      </a>
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
          <Col sm={12} md={6} className="py-4">
            <Image
              src={imageSourceFormatter(
                '/various/west-palm-beach-1193x693.jpg',
              )}
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
            . Content, including images, displayed on this
            website is protected by copyright laws. Downloading, republication,
            retransmission or reproduction of content on this website is
            strictly prohibited.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
