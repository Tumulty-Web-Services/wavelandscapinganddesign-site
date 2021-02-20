import Head from 'next/head';
import Banner from 'components/pages/banner';

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
      <br />
      Add a netlify form here with file upload
    </>
  );
}
