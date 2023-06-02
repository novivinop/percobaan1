import { Container, Row, Card, Carousel, Col } from "react-bootstrap";

const Testimoni = () => {
  return (
    <Container id="Testimoni" className="mt-5">
      <Row>
        <Col className="text-center">
          <h3 className="fw-bold">Testimonial</h3>
          <div className="line-horizontal"></div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-4">
          Berbagai review positif dari para pelanggan kami
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={8} className="mx-auto">
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <Card
                className="mb-3 box-shadow"
                style={{ backgroundColor: "#f1f3ff" }}
              >
                <Row className="g-0 mx-2 my-5">
                  <Col md={3} className="my-auto text-center">
                    <img
                      src="/image/img_testi.jpeg"
                      alt=""
                      className="img-fluid img-rounded"
                    />
                  </Col>
                  <Col md={8} className="text-start">
                    <Card.Body>
                      <img
                        src="/image/Rate.png"
                        alt=""
                        style={{ height: "16px" }}
                        className="img-fluid"
                      />
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                      <strong className="mt-2">Angeline Tirza, Apoteker</strong>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                className="mb-3 box-shadow"
                style={{ backgroundColor: "#f1f3ff" }}
              >
                <Row className="g-0 mx-2 my-5">
                  <Col md={3} className="my-auto text-center">
                    <img
                      src="/image/img_testi.jpeg"
                      alt=""
                      className="img-fluid img-rounded"
                    />
                  </Col>
                  <Col md={8} className="text-start">
                    <Card.Body>
                      <img
                        src="/image/Rate.png"
                        alt=""
                        style={{ height: "16px" }}
                        className="img-fluid"
                      />
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                      </p>
                      <strong className="mt-2">
                        Paulus Stevanus, Kontraktor
                      </strong>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimoni;

//
