import Head from 'next/head';
import Banner from 'components/pages/banner';
import ContactForm from 'components/contact-form';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Wave Landscaping & Design: get in touch!</title>
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
      <Banner title="Get in touch!" />
      <br />
      <ContactForm contactPage />
    </>
  );
}
