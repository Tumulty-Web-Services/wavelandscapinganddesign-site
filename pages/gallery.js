import Head from 'next/head';
import Banner from 'components/pages/banner';
import GalleryGrid from 'components/gallery';
import FooterContact from 'components/pages/footer-contact';
import { getGalleryPhotos } from 'utils/fauna';
import imageSourceFormatter from 'utils/image-source-format';

export default function Gallery({ gallery }) {
  return (
    <>
      <Head>
        <title>
          Wave Landscaping & Design: Gallery of our work and services
        </title>
        <meta
          name="description"
          content="Wave Landscaping & Design gallery of our previous work, if you see something you get in touch today!"
        />
        <meta
          property="og:title"
          content="Wave Landscaping & Design: Gallery of our work and services"
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
          content="Wave Landscaping & Design gallery of our previous work, if you see something you get in touch today!"
        />
        {/* <script
          key="ScarinciHollenbeck"
          type="application/ld+json"ds
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <Banner title="Gallery" />
      <br />
      <GalleryGrid photos={gallery} />
      <FooterContact />
    </>
  );
}

export async function getStaticProps() {
  const galleryData = await getGalleryPhotos();

  return {
    props: {
      gallery:
        galleryData.map((photo) => ({
          id: photo.ts,
          src: imageSourceFormatter(`/gallery/${photo.data.fileName}`),
          alt: photo.data.alt,
          width: photo.data.width,
          height: photo.data.height,
        })) || [],
    },
  };
}
