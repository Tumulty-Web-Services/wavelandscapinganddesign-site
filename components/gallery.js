import React, { useState } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imageSourceFormatter from 'utils/image-source-format';

function ModalImageContainer({ modalShow, fileName, alt, setModalShow }) {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Image src={fileName} alt={alt} layout="fill" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Gallery({ photos }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h3 className="text-center mb-4" style={{ fontSize: '2.4rem' }}>
        <strong>Gallery</strong>
      </h3>
      <Container>
        <Row>
          {photos
            && photos.map((photo) => (
              <Col key={photo.id} sm={12} md={4} className="px-0 mx-0">
                <ModalImageContainer
                  modalShow={modalShow}
                  setModalShow={() => setModalShow(false)}
                  fileName={imageSourceFormatter(`gallery/${photo.fileName}`)}
                  alt={photo.alt}
                />
                <Image
                  src={imageSourceFormatter(`/gallery/${photo.fileName}`)}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  onClick={() => setModalShow(true)}
                />

              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
