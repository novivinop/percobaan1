import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="nav-background">
        <Row>
          <Col className="mt-5 mx-auto" md={6}>
            <h2 className="fw-bold lh-base w-75">
              Layanan Internet terbaik di kawasan Bekasi
            </h2>
            <p className="w-75 mt-3">
              Selamat datang di Nusa Berkah Net. Kami menyediakan layanan
              internet kualitas terbaik dengan harga terjangkau. Selalu siap
              melayani kebutuhanmu dalam berinternet.
            </p>
            <Button
              className="fw-bold text-white mt-4 mb-5"
              href="/Product"
              variant="outline-light"
              style={{ backgroundColor: "#7D9D9C" }}
            >
              Mulai Berlangganan
            </Button>
          </Col>
          <Col className="mt-5 mx-auto" md={5}>
            <img src="/image/img_about.png" className="img-fluid"></img>
          </Col>
        </Row>
        <div className="line-horizontal-about"></div>
        <div className="text-center mt-5">
          <h3 className="fw-bold">Galeri</h3>
          <div className="line-horizontal mb-3"></div>
        </div>
      </Container>
    </div>
  );
};

export default About;
