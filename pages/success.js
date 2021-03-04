/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Success() {
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col sm={12} md={{ span: 6, offset: 3 }}>
          <h2 className="display-4">Thank you for reaching out!</h2>
          <h4 className="text-center">
            <span className="lead">
              We&apos;ll be reaching out to you shortly about your inquiry.
            </span>
            {' '}
            <strong>Have a great day!</strong>
          </h4>
          <Link href="/">
            <a className="d-block my-3 text-center">
              <u>Return to the homepage</u>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
