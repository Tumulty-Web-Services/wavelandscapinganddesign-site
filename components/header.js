/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from 'styles/Navbar.module.css';
import imageSourceFormatter from 'utils/image-source-format';

export default function Header() {
  return (
    <header className="my-4">
      <Container>
        <Nav className={`${styles.socialMediaIcons} justify-content-end`}>
          <Nav.Item className="mx-2">
            <Link href="https://www.facebook.com/wavelandscapingdesign">
              <a>
                <Image
                  src={imageSourceFormatter(
                    '/social-media-icons/facebook-40x40.png',
                  )}
                  height={25}
                  width={25}
                  alt="facebook"
                />
              </a>
            </Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Link href="https://www.instagram.com/wavelandscapingdesign">
              <a>
                <Image
                  src={imageSourceFormatter(
                    '/social-media-icons/instagram-40x40.png',
                  )}
                  height={25}
                  width={25}
                  alt="instagram"
                />
              </a>
            </Link>
          </Nav.Item>
          <Nav.Item className="mx-1">
            <Link href="https://www.tiktok.com/@wavelandscapingdesign">
              <a>
                <Image
                  src={imageSourceFormatter(
                    '/social-media-icons/tiktok-40x40.png',
                  )}
                  height={25}
                  width={25}
                  alt="tiktok"
                />
              </a>
            </Link>
          </Nav.Item>
        </Nav>
        <Navbar collapseOnSelect expand="lg" className="py-0 my-0">
          <Navbar.Brand>
            <Link href="/">
              <a>
                <Row>
                  <Col sm={12} md={1} className="me-4">
                    <Image
                      src={imageSourceFormatter('/various/Logo-80x80.jpg')}
                      alt="Wave Landscaping & Design"
                      height={60}
                      width={60}
                      layout="fixed"
                      className={styles.borderRadius50}
                    />

                  </Col>
                  <Col sm={12} md={10}>
                    <div>
                      <h1 className={`my-0 py-0 ${styles.title}`}>
                        <strong>Wave Landscaping & Design</strong>
                      </h1>
                      <h2 className={styles.subtitle}>
                        <em>
                          Your landscaping should transport you to your very own
                          personal getaway
                        </em>
                      </h2>
                    </div>
                  </Col>
                </Row>

              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end ms-5"
          >
            <Nav>
              <Nav.Item>
                <Link href="/services">
                  <a className={styles.navLinks}>Services</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/gallery">
                  <a className={styles.navLinks}>Gallery</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/reviews">
                  <a className={styles.navLinks}>Reviews</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/careers">
                  <a className={styles.navLinks}>Careers</a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/contact">
                  <a className={styles.navLinks}>Contact</a>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
