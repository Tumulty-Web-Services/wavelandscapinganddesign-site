import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from 'styles/SrOnly.module.css';
import formStyles from 'styles/Forms.module.css';
import imageSourceFormatter from 'utils/image-source-format';

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
            src={imageSourceFormatter('/various/sam-barnwell.jpg')}
            alt="Sam Barnwell"
            width={827}
            height={472}
            className="my-4"
          />
        </Col>
        <Col sm={12} md={5}>
          <div className="p-3">
            <h4 className={contactPage ? 'text-dark mb-3' : 'text-white mb-3'}>
              Or fill out the form below, and we&apos;ll get back to you
              shortly!
            </h4>
            <form name="contact" action="/success" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <Row>
                <Col sm={12}>
                  <label className={formStyles.label} htmlFor="fullName">
                    <span className={styles.srOnly}>Full Name</span>
                    <input
                      id="fullName"
                      name="fullName"
                      className="p-2 w-100"
                      type="text"
                      placeholder="Full name"
                    />
                  </label>
                  <label className={formStyles.label} htmlFor="email">
                    <span className={styles.srOnly}>Email</span>
                    <input
                      id="email"
                      name="email"
                      className="p-2 w-100"
                      type="email"
                      placeholder="Email address"
                    />
                  </label>
                  <label className={formStyles.label} htmlFor="phone">
                    <span className={styles.srOnly}>Phone</span>
                    <input
                      id="phone"
                      name="phone"
                      className="p-2 w-100"
                      type="phone"
                      placeholder="Phone number"
                    />
                  </label>
                  <label className={formStyles.label} htmlFor="message">
                    <span className={styles.srOnly}>Message</span>
                    <textarea
                      className="p-2 w-100"
                      rows="4"
                      cols="50"
                      name="message"
                      placeholder="Message"
                    />
                  </label>
                </Col>
                <Col sm={12}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
