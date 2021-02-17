import React, { useState } from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imageSourceFormatter from 'utils/image-source-format';

function ModalImageContainer({ props }) {
  const {
    modalShow, fileName, alt, setModalShow,
  } = props;

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

export default function Gallery({ slides }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h3 className="text-center mb-4" style={{ fontSize: '2.4rem' }}>
        <strong>Gallery</strong>
      </h3>
      <Container>
        <Row>
          {slides
            && slides.map((slide) => (
              <Col key={slide.alt} sm={12} md={3} className="px-0 mx-0">
                <Image
                  src={imageSourceFormatter(`gallery/${slide.fileName}`)}
                  alt={slide.alt}
                  layout="fill"
                  onClick={() => setModalShow(true)}
                />
                <ModalImageContainer
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  fileName={imageSourceFormatter(`gallery/${slide.fileName}`)}
                  alt={slide.alt}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
