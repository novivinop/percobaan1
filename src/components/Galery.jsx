import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';

const images = [
  {
    src: './image/server.jpeg',
    alt: 'Image 1',
    subtitle: 'Server'
  },
  {
    src: './image/ruang.jpeg',
    alt: 'Image 2',
    subtitle: 'Ruang Kerja'
  },
  {
    src: './image/ruang2.jpeg',
    alt: 'Image 3',
    subtitle: 'Ruang Kerja'
  },
  {
    src: './image/sprising.jpeg',
    alt: 'Image 4',
    subtitle: 'Proses Sprising'
  },
  {
    src: './image/pemasangan.jpeg',
    alt: 'Image 5',
    subtitle: 'Proses Pemasangan'
  },
  {
    src: 'https://via.placeholder.com/300x200.png?text=Image+6',
    alt: 'Image 6',
    subtitle: 'Image 6 Subtitle'
  },
  {
    src: 'https://via.placeholder.com/300x200.png?text=Image+7',
    alt: 'Image 7',
    title: 'Image 7 Title',
    subtitle: 'Image 7 Subtitle'
  },
  {
    src: 'https://via.placeholder.com/300x200.png?text=Image+8',
    alt: 'Image 8',
    subtitle: 'Image 8 Subtitle'
  },
  {
    src: 'https://via.placeholder.com/300x200.png?text=Image+9',
    alt: 'Image 9',
    subtitle: 'Image 9 Subtitle'
  }
];

const Gallery = () => {
  return (
    <Container className="nav-background mt-3">
      <Row >
        {images.map((image, index) => (
          <Col sm="3" key={index}>
            <Card>
              <Card.Img className="card-img-top" top width="100%" src={image.src} alt={image.alt} />
              <Card.Body>
                <Card.Subtitle className="text-center">{image.subtitle}</Card.Subtitle>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
