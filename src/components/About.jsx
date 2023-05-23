import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Container className="nav-background">
      <Row>
        <Col className="mt-5 mx-auto" xs={12} md={12} lg={6} >
        <h2 className="fw-bold lh-base w-75">Layanan Internet terbaik di kawasan Bekasi</h2>
        <p className="w-75 mt-3">Selamat datang di Nusa Berkah Net. Kami menyediakan layanan internet kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu dalam berinternet.</p>
        <Button className="fw-bold text-white mt-4 mb-5 btn-sewa" href="/Product">Mulai Berlangganan</Button>
        </Col>
        <Col className="mt-5 mx-auto" xs={12} md={12} lg={6}>
          <img src="/image/img_family.jpg" className="img-fluid"></img>
        </Col>
      </Row>
      <div className="line-horizontal"></div>
       <div className="text-center">
          <h3 className="fw-bold">Galeri</h3>
      </div>
    </Container>
    </div>
  );
};

export default About;