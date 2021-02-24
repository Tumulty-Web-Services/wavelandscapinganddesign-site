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
          <ul className="list-unstyled text-center list-inline">
            <li className="list-inline-item">
              <Link href="#commercial-landscaping">
                <a>
                  Commercial Landscaping
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#landscape-design">
                <a>
                  Landscape Design
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#lawn-maintenance">
                <a>
                  Lawn Maintenance
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#hurricane-cleanup">
                <a>
                  Hurricane Cleanup
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#irrigation">
                <a>
                  Irrigation
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#tree-services">
                <a>
                  Tree Services
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#residential">
                <a>
                  Residential
                </a>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link href="#landscaping">
                <a>
                  Landscaping
                </a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
