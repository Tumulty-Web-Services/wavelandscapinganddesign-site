import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import ServiceDescriptionLeft from 'components/services/service-description-left';
import ServiceDescriptionRight from 'components/services/service-description-right';
import ServiceLinks from 'components/services/service-links';
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
      <Banner title=" Our Services" />
      <ServiceLinks />
      <Container>
        <ServiceDescriptionLeft
          title="Commercial Landscaping"
          content="Sunshine Landscapers works with various companies to ensure commercial properties look nothing less than perfect."
          image="/images/services/commercial-landscaping.png"
          width={700}
          height={393}
          link="commercial-landscaping"
        />
        <ServiceDescriptionRight
          title="Landscape Design"
          content="Sunshine Landscapers provides landscape design sketches personalized for each client. We work closely with our clients throughout the design process to install day, ensuring their vision is executed."
          image="/images/services/landscape-design.png"
          width={700}
          height={466}
          link="landscape-design"
        />
        <ServiceDescriptionLeft
          title="Lawn Maintenance"
          content="Includes cutting the grass, edging, trimming of any trees, shrubs or plants under 6 ft., spring, and fall clean up, complimentary sprinkler checks, and weed and feed."
          image="/images/services/lawn-maintenance.png"
          width={700}
          height={603}
          link="lawn-maintenance"
        />
        <ServiceDescriptionRight
          title="Hurricane Cleanup"
          content="Hurricanes can leave small messes or large chaos. We will help you get your yard back in order."
          image="/images/services/hurricane-cleanup.png"
          width={700}
          height={466}
          link="hurricane-cleanup"
        />
        <ServiceDescriptionLeft
          title="Irrigation"
          content="Offering sprinkler checks and system repairs"
          image="/images/services/irrigation.png"
          width={700}
          height={466}
          link="irrigation"
        />
        <ServiceDescriptionRight
          title="Tree Services"
          content="From trimming palm to removal of trees"
          image="/images/services/tree-services.png"
          width={700}
          height={525}
          link="tree-services"
        />
        <ServiceDescriptionLeft
          title="Residential Landscaping"
          content="From weekly maintenance, design, irrigation, tree services, to mulch, we will work endlessly to exceed your landscape expectations."
          image="/images/services/residential.png"
          width={640}
          height={470}
          link="residential"
        />
      </Container>
    </>
  );
}
