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
            && photos.map((photo) => (
              <Col key={photo.id} sm={12} md={4} className="m-0 p-0">
                <Card style={{ maxHeight: '300px' }}>
                  <Card.Img
                    variant="top"
                    src={`https://res.cloudinary.com/tumulty-web-services/image/upload/${photo.src}`}
                    style={{ overflow: 'hidden' }}
                    className={styles.galleryImage}
                    alt={photo.alt}
                    onClick={() => {
                      setModalShow(true);
                      setCurrentPhoto({
                        src: photo.src,
                        width: photo.width,
                        height: photo.height,
                        alt: photo.alt,
                      });
                    }}
                  />
                </Card>
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
