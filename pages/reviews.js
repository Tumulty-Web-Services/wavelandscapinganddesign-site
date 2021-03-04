import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from 'components/pages/banner';
import FooterContact from 'components/pages/footer-contact';

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Wave Landscaping & Design: See our reviews!</title>
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
      <Banner title="Reviews" />
      <br />
      <Container>
        <Row>
          <Col sm={12} className="my-4">
            {/** Quote 1 -- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “I’ve been in my home for 28 years. And in all those years
                  I’ve never been even remotely as happy as I am now as a direct
                  result of the tireless efforts of Samantha Barnwell, her
                  father Ed, and her brother Eddie, in capturing the vision in
                  my mind, creating a design to meet that vision with continual
                  collaboration to ensure I was involved in the process, and the
                  ultimate planting, rock laying, accents, shaping and more
                  which made the final product my own personal Garden of Eden,
                  front and back! So much so that I feel blessed every morning
                  to wake up to the view of their creation. Samantha was
                  relentless in having me forward pictures of planting designs
                  and colors to the first design on the computer. Ed would not
                  rest until every aspect met his perfectionist’s eye, and Eddie
                  shaped everything as if his chainsaw were a paintbrush. It
                  comes down to the combination of talent, perseverance,
                  dedication, and passion-which is in the DNA of every Barnwell
                  family member and separates Sunshine Landscapers as head and
                  shoulders above the rest. They treated me like family; a new
                  relationship that will be everlasting. ”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Neal G. of Wellington, FL
              </figcaption>
            </figure>
            {/** Quote 1 -- end */}
            {/** Quote 2 -- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>“They have done a fantastic job with my yard.”</p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Debbie E. of Boca Raton, FL
              </figcaption>
            </figure>
            {/** Quote 2 -- end */}
            {/** Quote 3 -- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “They have done an amazing landscaping job every single time.
                  I would highly recommend their services!”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Danielle L. of Tequesta, FL
              </figcaption>
            </figure>
            {/** Quote 3-- end */}
            {/** Quote 4-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “Sunshine Landscapers is so easy to work with. Can’t say
                  enough about them. “
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Nicole P. of Boynton Beach, FL
              </figcaption>
            </figure>
            {/** Quote 4-- end */}
            {/** Quote 5-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>“The best landscapers I have ever have.”</p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Bill O. of North Palm Beach, FL
              </figcaption>
            </figure>
            {/** Quote 5-- end */}
            {/** Quote 6-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “I could not imagine redesigning my lawn with any other
                  company. The patience and care that Sunshine Landscapers
                  displayed was greatly appreciated. I highly recommend them to
                  anyone looking for premier lawn service.”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Joshua B. of Palm Beach Gardens, FL
              </figcaption>
            </figure>
            {/** Quote 6-- end */}
            {/** Quote 7-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “I had an emergency tree issue and they were there the very
                  next day to take care of it. 10/10.”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Arianna J. of Jupiter, FL
              </figcaption>
            </figure>
            {/** Quote 7-- end */}
            {/** Quote 8-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “The absolute best lawn care company. I trust them with
                  everything from my weekly maintenance to my irrigation.”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Juan P. of Lake Worth, FL
              </figcaption>
            </figure>
            {/** Quote 8-- end */}
            {/** Quote 9-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “I am in love with my outdoor paradise Sunshine Landscapers
                  has created for me. My patio is beautiful and the flowers they
                  chose truly compliment my style.”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Barbara B. of Palm Beach Gardens, FL
              </figcaption>
            </figure>
            {/** Quote 9-- end */}
            {/** Quote 10-- begin */}
            <figure>
              <blockquote className="blockquote">
                <p>
                  “Sunshine Landscapers goes above and beyond for their
                  customers.”
                </p>
              </blockquote>
              <figcaption className="blockquote-footer my-3">
                Jake D. of Delray Beach, FL
              </figcaption>
            </figure>
            {/** Quote 10-- end */}
          </Col>
        </Row>
      </Container>
      <FooterContact />
    </>
  );
}
