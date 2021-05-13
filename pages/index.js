import Head from 'next/head';
import Banner from 'components/home/banner';
import Services from 'components/home/services';
import GalleryGrid from 'components/gallery';
import SocialMedia from 'components/home/social-media';
import TitleAndButton from 'components/home/title-and-button';
import styles from 'styles/Home.module.css';
import { getGalleryPhotos } from 'utils/fauna';
import imageSourceFormatter from 'utils/image-source-format';

export default function Home({ gallery, instagram }) {
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
      </Head>
      <Banner />
      <div className={styles.grayBackground}>
        <Services />
        <h3 className="text-center mb-4" style={{ fontSize: '2.4rem' }}>
          <strong>Gallery</strong>
        </h3>
        <GalleryGrid photos={gallery} />
        <TitleAndButton
          title="This is only a glimpse of what we can do"
          link="/gallery"
          label="Full Gallery"
        />
        <br />
      </div>
      <SocialMedia feed={instagram} />
    </>
  );
}

export async function getStaticProps() {
  const galleryData = await getGalleryPhotos();
  /**
   * Instagram feed
   *
   */
  // set it up to first grab the INSTAGRAM ACCESS TOKEN
  // then pass it to the URL
  const url = 'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"10982627174","first":20,"after":null}';
  const request = await fetch(url).then((data) => data.json());

  return {
    props: {
      gallery:
        galleryData
          .filter((_, i) => i <= 8)
          .map((photo) => ({
            id: photo.ts,
            src: imageSourceFormatter(`/gallery/${photo.data.fileName}`),
            alt: photo.data.alt,
            width: photo.data.width,
            height: photo.data.height,
          })) || [],
        instagram: request.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
          media_url: edge.node.thumbnail_src,
          caption: edge.node.edge_media_to_caption.edges[0].node.text,
          id: edge.node.id,
        })),
    },
  };
}
