import Image from 'next/image';
import useSWR from 'swr';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import TitleAndButton from 'components/home/title-and-button';
import imageSourceFormatter from 'utils/image-source-format';
import 'react-multi-carousel/lib/styles.css';

export default function SocialMedia() {
  const url = '/.netlify/functions/instagram-feed';
  const { data, error } = useSWR(url, fetch(url).then((r) => r.json()));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
        <Col sm={12}>
          <div className="my-5">
            <h3>
              <a href="https://www.instagram.com/wavelandscapingdesign/" target="_blank" rel="noopener noreferrer">
                <strong>@wavelandscapingdesign</strong>
              </a>
            </h3>
            <Carousel className="text-center my-3" infinite responsive={responsive}>
              {data.body.map((post) => (
                <Card key={post.id} style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={post.media_url} style={{ height: '300px' }} />
                  <Card.Body>
                    <Card.Text>
                      {post.caption}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
            <TitleAndButton
              title="Let's make your designs a reality, together"
              link="/contact"
              label="Connect Now"
            />
            <div className="d-flex justify-content-center my-4">
              <a href="https://www.facebook.com/wavelandscapingdesign" target="_blank" rel="noopener noreferrer">
                <Image
                  src={imageSourceFormatter('/social-media-icons/FB-250x250.jpg')}
                  width={50}
                  height={50}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/wavelandscapingdesign" target="_blank" className="mx-4" rel="noopener noreferrer">
                <Image
                  src={imageSourceFormatter('/social-media-icons/Instagram-250x250.jpg')}
                  width={50}
                  height={50}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.tiktok.com/@wavelandscapingdesign" target="_blank" rel="noopener noreferrer">
                <Image
                  src={imageSourceFormatter('/social-media-icons/TikTok-245x268.jpg')}
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
