import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from 'styles/SrOnly.module.css';

export default function ContactForm({ contactPage }) {
  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} md={6}>
          <h4 className={contactPage ? 'text-dark mb-3' : 'text-white mb-3'}>
            Interested in learning more about our services? Email or call us
            <br />
            today and receive a free estimate!
          </h4>
          <ul
            className={
              contactPage
                ? 'text-dark list-unstyled mt-4'
                : 'text-white list-unstyled mt-4'
            }
          >
            <li>
              <h5>
                <strong>Phone: </strong>
                561-319-3145
              </h5>
            </li>
            <li>
              <h5>
                <strong>Email: </strong>
                wavelandscapinganddesign@gmail.com
              </h5>
            </li>
          </ul>
          <Image
            src="/images/sam-barnwell.jpg"
            alt="Sam Barnwell"
            width={827}
            height={472}
            className="my-4"
          />
        </Col>
        <Col sm={12} md={5}>
          <div className="p-3">
            <h4 className={contactPage ? 'text-dark mb-3' : 'text-white mb-3'}>
              Or fill out the form below, and we&apos;ll get back to you shortly!
            </h4>
            <Form netlify>
              <Form.Row>
                <Form.Label htmlFor="fullName" className={styles.srOnly}>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  id="fullName"
                  type="text"
                  placeholder="Full name"
                />
              </Form.Row>
              <Form.Row>
                <Form.Label htmlFor="email" className={styles.srOnly}>
                  Email
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  id="email"
                  type="email"
                  placeholder="Email address"
                />
              </Form.Row>
              <Form.Row>
                <Form.Label htmlFor="email" className={styles.srOnly}>
                  Phone
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  id="phone"
                  type="phone"
                  placeholder="Phone number"
                />
              </Form.Row>
              <Form.Row>
                <Form.Label htmlFor="email" className={styles.srOnly}>
                  Message
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  id="message"
                  as="textarea"
                  rows={8}
                  placeholder="Message"
                />
              </Form.Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
