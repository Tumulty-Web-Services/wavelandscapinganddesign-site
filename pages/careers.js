import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Banner from 'components/pages/banner';
import FooterContact from 'components/pages/footer-contact';
import formStyles from 'styles/Forms.module.css';
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
            <form name="careers" action="/success" method="POST" data-netlify="true" encType="multipart/form-data">
              <input type="hidden" name="form-name" value="careers" />
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
                  <label className={formStyles.label} htmlFor="resume">
                    <span className="d-block mb-1">Resume</span>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
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
          </Col>
        </Row>
      </Container>
      <FooterContact />
    </>
  );
}
