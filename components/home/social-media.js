import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BeatLoader from 'react-spinners/BeatLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-multi-carousel';
import TitleAndButton from 'components/home/title-and-button';
import imageSourceFormatter from 'utils/image-source-format';
import 'react-multi-carousel/lib/styles.css';

export default function SocialMedia() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getInstagramPosts() {
      const request = await fetch('/.netlify/functions/instagram-feed')
        .then((data) => data)
        .catch((err) => err);

      if (request.status === 200) {
        setPosts(request.data);
      }
    }
    if (posts.length <= 0) {
      getInstagramPosts();
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Row>
        <Col sm={12} style={{ marginTop: '6.5em', marginBottom: '5em' }}>
          <div>
            {(posts.length <= 0) && (
              <div className="mx-auto d-block text-center mb-5">
                <BeatLoader color="#7C9DDE" />
              </div>
            )}

            {(posts.length > 0) && (
              <>
                <h3>
                  <a
                    href="https://www.instagram.com/wavelandscapingdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>@wavelandscapingdesign</strong>
                  </a>
                </h3>

                <Carousel
                  className="text-center mt-3 mb-5"
                  infinite
                  responsive={responsive}
                >
                  {posts.map((node) => (
                    <div key={node.id} className="px-3">
                      <div
                        style={{
                          backgroundImage: `url(/images/instagram/${node.url})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          backgroundSize: 'cover',
                          height: '600px',
                          width: '400px',
                          borderRadius: '5px',
                        }}
                      />
                      <span className="mt-2 d-block">
                        {node.caption}
                      </span>
                    </div>
                  ))}
                </Carousel>

              </>
            )}

            <TitleAndButton
              title="Let's make your designs a reality, together"
              link="/contact"
              label="Connect Now"
            />
            <div className="d-flex justify-content-center my-5">
              <a
                href="https://www.facebook.com/wavelandscapingdesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageSourceFormatter(
                    '/social-media-icons/FB-250x250.jpg',
                  )}
                  width={50}
                  height={50}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/wavelandscapingdesign"
                target="_blank"
                className="mx-4"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageSourceFormatter(
                    '/social-media-icons/Instagram-250x250.jpg',
                  )}
                  width={50}
                  height={50}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.tiktok.com/@wavelandscapingdesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageSourceFormatter(
                    '/social-media-icons/TikTok-245x268.jpg',
                  )}
                  width={50}
                  height={50}
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
