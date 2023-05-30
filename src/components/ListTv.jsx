import { Container, Row, Col, Accordion } from "react-bootstrap";

const ListTv = () => {
  return (
    <div className="mobile-padding">
      <Container className="nav-background">
        <div className="text-center">
          <img
            className="d-block w-100 reduce-height"
            src="./image/img_tv5.png"
            alt="Gambar TV"
            style={{ height: "350px" }}
          />
          <div className="text-overlay">
            <h1 className="fw-bold mb-3">TV PROGRAM</h1>
            <div className="line-horizontal-overlay"></div>
            <h4 className="text-white fs-6 fw-dark mt-4">
              Nusa Berkah Net menyediakan pilihan lengkap saluran televisi yang
              mencakup program-program untuk anak-anak, film, olahraga, dan
              masih banyak lagi.
            </h4>
          </div>
        </div>
        <div className="text-center mt-5">
          <h4>Daftar Program</h4>
          <div className="line-horizontal"></div>
          <Row className="justify-content-md-center mt-3">
            <Col sm={8}>
              <h7>
                Nusa Berkah Net menyediakan paket saluran terbaik, resolusi
                tinggi standar (HD), serta kualitas suara yang jernih, Nusa
                Berkah Net memberikan pengalaman menonton terbaik bagi Anda.
                Nusa Berkah Net menawarkan berbagai macam konten menarik yang
                terbagi dalam beberapa kategori. Berikut adalah daftar saluran
                yang disediakan oleh layanan Nusa Berkah Net.
              </h7>
            </Col>
          </Row>
        </div>
        {/* </Container>
    <Container className="text-center"> */}
        <Row>
          <Col>
            <Row className="justify-content-md-center mt-3 g-2">
              <Col sm={8}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h8 className="fw-bold text-center button">
                        Informasi Layanan Televisi
                      </h8>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="text-center">
                        <img
                          src="/image/img_tv1.png"
                          className="w-100 shadow"
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListTv;
