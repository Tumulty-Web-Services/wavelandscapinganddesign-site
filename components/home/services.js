/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imageSourceFormatter from 'utils/image-source-format';

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
          <Card className="mb-3">
            <Card.Body className="text-center">
              <Link href="/services/#lawn-maintenance">
                <a>
                  <Image
                    src={imageSourceFormatter(
                      '/service-icons/lawn-maintanence.jpg',
                    )}
                    alt="lawn maintanence"
                    width={220}
                    height={192}
                    className="p-4"
                  />
                  <h4>Lawn maintenance</h4>
                  <hr className="mx-5" />
                  <p className="text-center px-4 pb-4">
                    Achieve a greener lawn with lawn care services from our
                    team.
                  </p>
                </a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <Link href="/services/#landscape-design">
                <a>
                  <Image
                    src={imageSourceFormatter(
                      '/service-icons/landscape-design.jpg',
                    )}
                    alt="landscape desgin"
                    width={220}
                    height={206}
                    className="p-4"
                  />
                  <h4>Landscape Desgin</h4>
                  <hr className="mx-5" />
                  <p className="text-center px-4 pb-2">
                    Endless ideas for customizing your personal resort or your
                    backyard.
                  </p>
                </a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <Link href="/services/#irrigation-services">
                <a>
                  <Image
                    src={imageSourceFormatter('/service-icons/irrigation.jpg')}
                    alt="irrigation"
                    width={220}
                    height={191}
                    className="p-3"
                  />
                  <h4>Irrigation Services</h4>
                  <hr className="mx-5" />
                  <p className="text-center px-4 pb-5">
                    Offering sprinkler checks and system repairs.
                  </p>
                </a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <style jsx>
        {`
          h4 {
            font-family: "Proxima Nova Bold";
          }
        `}
      </style>
    </Container>
  );
}
