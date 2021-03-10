import React, { useState } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from 'styles/Gallery.module.css';

function MyVerticallyCenteredModal({ modalShow, setModalShow, currentPhoto }) {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-0 m-0"
    >
      <Card>
        <Image
          src={currentPhoto.src}
          width={currentPhoto.width}
          height={currentPhoto.height}
          alt={currentPhoto.alt}
          className="p-0 m-0"
        />
        <Button variant="link" onClick={() => setModalShow(false)}>
          Close
        </Button>
      </Card>
    </Modal>
  );
}

export default function Gallery({ photos }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});

  return (
    <div>
      <Container className="mb-5">
        <Row>
          {photos
            && photos.map((photo, index) => (
              <Col key={photo.id} sm={12} md={4} className="my-1 px-1">
                <div
                  tabIndex="0"
                  role="button"
                  className={styles.galleryImage}
                  aria-label={`photo-${index}`}
                  style={{
                    backgroundImage: `url(${`https://res.cloudinary.com/tumulty-web-services/image/upload/${photo.src}`})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    height: '300px',
                    width: '100%',
                    borderRadius: '5px',
                  }}
                  onClick={() => {
                    setModalShow(true);
                    setCurrentPhoto({
                      src: photo.src,
                      width: photo.width,
                      height: photo.height,
                      alt: photo.alt,
                    });
                  }}
                  onKeyPress={() => {
                    setModalShow(true);
                    setCurrentPhoto({
                      src: photo.src,
                      width: photo.width,
                      height: photo.height,
                      alt: photo.alt,
                    });
                  }}
                />
              </Col>
            ))}
          <MyVerticallyCenteredModal
            modalShow={modalShow}
            setModalShow={setModalShow}
            currentPhoto={currentPhoto}
          />
        </Row>
      </Container>
    </div>
  );
}
