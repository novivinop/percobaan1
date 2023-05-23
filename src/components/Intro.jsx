import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
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
    </Container>

    <Container>
      <Row className="mt-5">
        <Col className="mx-auto" md={9} lg={5}>
            <img src="/image/img_woman.jpg" className="img-fluid" />
          </Col>
          <Col className="mx-auto" lg={5}>
            <h4 className="fw-bold lh-base">Best Internet Service for any kind of product in Bekasi!</h4>
            <p className="mt-4">Nikmati layanan internet di Bekasi bersama Nusa Berkah Net jaminan harga lebih murah 
            dibandingkan yang lain, kualitas pelayanan terbaik untuk akses internet mudah.</p>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Layanan 24 jam</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Layanan 24 jam</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Layanan 24 jam</td>
            </tr>
          </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Intro;