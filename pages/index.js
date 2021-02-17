import Head from 'next/head';
import Banner from 'components/home/banner';
import Services from 'components/home/services';
import Gallery from 'components/gallery';
import SocialMedia from 'components/home/social-media';
import TitleAndButton from 'components/home/title-and-button';
import styles from 'styles/Home.module.css';
import getGalleryPhotos from 'utils/fauna';

export default function Home({ gallery }) {  
  return (
    <>
      <Head>
        <title>
          Wave Landscaping & Design: lawn maintenance and design services
        </title>
        <meta
          name="description"
          content="Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL."
        />
        <meta
          property="og:title"
          content="Wave Landscaping & Design: lawn maintenance and design services"
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
          content="Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL."
        />
        {/* <script
          key="ScarinciHollenbeck"
          type="application/ld+json"ds
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <Banner />
      <div className={styles.grayBackground}>
        <Services />
        <Gallery photos={gallery} />
        <TitleAndButton
          title="This is only a glimpse of what we can do"
          link="/gallery"
          label="Full Gallery"
        />
      </div>
      <SocialMedia />
    </>
  );
}

export async function getStaticProps() {
  const galleryData = await getGalleryPhotos();
  return {
    props: {
      gallery: galleryData.filter((_, i) => i <= 8).map((photo) => {
        return {
          id: photo.ts,
          fileName: photo.data.fileName,
          alt: photo.data.alt,
          width: photo.data.width,
          height: photo.data.height
        }
      }),
    }
  }
}
