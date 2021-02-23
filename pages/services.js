import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from 'components/pages/banner';

export default function Services() {
  return (
    <>
      <Head>
        <title>
          Wave Landscaping & Design: We offer a variety of landscaping services
        </title>
        <meta
          name="description"
          content="Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup"
        />
        <meta
          property="og:title"
          content="Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup"
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
          content="Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup"
        />
        {/* <script
          key="ScarinciHollenbeck"
          type="application/ld+json"ds
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <Banner title="Services" />
      <Container>
        <Row>
          <Col sm={12} md={6}>
            Service image
          </Col>
          <Col sm={12} md={6}>
            Service description
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            Service image
          </Col>
          <Col sm={12} md={6}>
            Service description
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            Service image
          </Col>
          <Col sm={12} md={6}>
            Service description
          </Col>
        </Row>
      </Container>
    </>
  );
}
