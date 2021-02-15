import Head from 'next/head';
import Banner from 'components/home/banner';
import Services from 'components/home/services';
import Gallery from 'components/home/gallery';
import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wave Landscaping & Design: lawn maintenance and design services</title>
        <meta name="description" content="Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL." />
        <meta property="og:title" content="Wave Landscaping & Design: lawn maintenance and design services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://wavelandscapinganddesign.com" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta property="og:description" content="Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL." />
        {/* <script
          key="ScarinciHollenbeck"
          type="application/ld+json"ds
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <Banner />
      <div className={styles.grayBackground}>
        <Services />
        <Gallery />
      </div>
    </>
  );
}
