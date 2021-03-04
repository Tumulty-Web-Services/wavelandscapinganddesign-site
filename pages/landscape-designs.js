import Head from 'next/head';
import Banner from 'components/pages/banner';
import GalleryGrid from 'components/gallery';
import FooterContact from 'components/pages/footer-contact';
import { getLandScapeDesignPhotos } from 'utils/fauna';
import imageSourceFormatter from 'utils/image-source-format';

export default function LandscapeDesigns({ gallery }) {
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
      <Banner title="Landscape Designs" />
      <br />
      <GalleryGrid photos={gallery} />
      <FooterContact />
    </>
  );
}

export async function getStaticProps() {
  const landscapeDesignData = await getLandScapeDesignPhotos();

  return {
    props: {
      gallery:
        landscapeDesignData.map((photo, index) => ({
          id: photo.ts,
          src: imageSourceFormatter(`/landscape-desgins/${photo.data.fileName}`),
          alt: `design-${index}`,
          width: photo.data.width,
          height: photo.data.height,
        })) || [],
    },
  };
}
