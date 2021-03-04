import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Banner from 'components/pages/banner';
import FooterContact from 'components/pages/footer-contact';
import styles from 'styles/SrOnly.module.css';

export default function Careers() {
  return (
    <>
      <Head>
        <title>
          Wave Landscaping & Design: Find a career and work with us!
        </title>
        <meta
          name="description"
          content="Interested in a career with  Wave Landscaping & Design? We are always looking for crew members and crew leaders."
        />
        <meta
          property="og:title"
          content="Interested in a career with  Wave Landscaping & Design? We are always looking for crew members and crew leaders."
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content="https://wavelandscapinganddesign.com"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
        <meta
          property="og:description"
          content="Interested in a career with  Wave Landscaping & Design? We are always looking for crew members and crew leaders."
        />
        {/* <script
          key="ScarinciHollenbeck"
          type="application/ld+json"ds
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <Banner title="Careers" />
      <Container>
        <Row>
          <Col sm={12} className="mt-5 text-center">
            <h4>
              Interested in a career with Sunshine Landscapers? We are always
              looking for crew members and crew leaders. Please fill out the
              form below and we will be in touch!
            </h4>
          </Col>
          <Col sm={12} md={{ span: 6, offset: 3 }} className="my-5">
            <Form data-netlify="true">
              <Form.Row>
                <Form.Label htmlFor="fullName" className={styles.srOnly}>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  id="fullName"
                  name="name"
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
                  name="email"
                  placeholder="Email address"
                />
              </Form.Row>
              <Form.Row>
                <Form.Label htmlFor="phone" className={styles.srOnly}>
                  Phone
                </Form.Label>
                <Form.Control
                  className="mb-4"
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Phone number"
                />
              </Form.Row>
              <Form.Row>
                <Form.Label htmlFor="resume">Upload Resume</Form.Label>
                <Form.File id="resume" name="resume" custom className="mb-5" />
              </Form.Row>
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="px-5 mx-auto text-center d-block"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterContact />
    </>
  );
}
