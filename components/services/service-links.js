/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from 'styles/ServiceLinks.module.css';

export default function ServiceLinks() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} className={`${styles.linksContainer} mb-5`}>
          <ul className="list-unstyled text-center list-inline mx-5 mt-2 mb-0">
            <li className="list-inline-item">
              <Link href="#commercial-landscaping">
                <a className="mx-2">
                  <u>Commercial Landscaping</u>
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#landscape-design">
                <a className="mx-2">
                  <u>Landscape Design</u>
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#lawn-maintenance">
                <a className="mx-2">
                  <u>Lawn Maintenance</u>
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#hurricane-cleanup">
                <a className="mx-2">
                  <u>Hurricane Cleanup</u>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled text-center list-inline mt-0 mb-3 mx-5">
            <li className="list-inline-item">
              <Link href="#irrigation">
                <a className="mx-2">
                  <u>Irrigation</u>
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#tree-services">
                <a className="mx-2">
                  <u>Tree Services</u>
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#residential-landscaping">
                <a className="mx-2">
                  <u>Residential Landscaping</u>
                </a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
