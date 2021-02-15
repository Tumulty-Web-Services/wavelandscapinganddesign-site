/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Services() {
  return (
    <Container className="py-5">
      <Row className="py-5">
        <Col sm={12}>
          <h3 className="text-center mb-4" style={{ fontSize: '2.4rem' }}>
            <strong>Services</strong>
          </h3>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body className="text-center">
              <Link href="/services/#lawn-maintenance">
                <a>
                  Lawn Maintenance
                </a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body className="text-center">
              <Link href="/services/#landscape-design">
                <a>
                  Landscape Design
                </a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body className="text-center">
              <Link href="/services/#irrigation-services">
                <a>
                  Irrigation Services
                </a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
