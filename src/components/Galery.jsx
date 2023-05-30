import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "react-bootstrap";

const images = [
  {
    src: "./image/server.jpeg",
    alt: "Image 1",
    subtitle: "Server",
  },
  {
    src: "./image/ruang.jpeg",
    alt: "Image 2",
    subtitle: "Ruang Kerja",
  },
  {
    src: "./image/ruang2.jpeg",
    alt: "Image 3",
    subtitle: "Ruang Kerja",
  },
  {
    src: "./image/sprising.jpeg",
    alt: "Image 4",
    subtitle: "Proses Splising",
  },
  {
    src: "./image/pemasangan.jpeg",
    alt: "Image 5",
    subtitle: "Proses Pemasangan",
  },
  {
    src: "./image/img_gudang.jpg",
    alt: "Image 6",
    subtitle: "Ruang gudang",
  },
  {
    src: "./image/img_ruangmeeting.jpg",
    alt: "Image 7",
    subtitle: "Ruang Meeting",
  },
];

const Gallery = () => {
  return (
    <div className="mobile-padding">
      <Container className="nav-background">
        <Row>
          {images.map((image, index) => (
            <Col sm="3" key={index}>
              <Card>
                <Card.Img
                  className="card-img-top"
                  top
                  width="100%"
                  src={image.src}
                  alt={image.alt}
                />
                <Card.Body>
                  <Card.Subtitle className="text-center">
                    {image.subtitle}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              <br></br>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
