import { Container, Row, Card, CardGroup, Accordion, Col } from 'react-bootstrap';

const Paket = () => {
  return (
    <div>
     <Container className="mt-5">
      <Row className="justify-content-md-center mt-3 g-2">
      <Col xs={8} md={6}>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h8 className="fw-bold text-center button">Syarat dan Ketentuan</h8></Accordion.Header>
        <Accordion.Body>
        <CardGroup>
      <Card>
        <Card.Body>
          <Card.Text className="text-left">
          <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga sudah termasuk biaya admin</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga sudah termasuk biaya sewa perangkat</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga belum termasuk PPN 11%</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga dan paket berlaku untuk area dan periode tertentu</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga dan paket dapat berubah sewaktu-waktu</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Tambahan sewa STB Rp. 40.000/bulan</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Maksimal 2 STB dalam 1 lokasi</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Persediaan terbatas</td>
            </tr>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="mt-3" eventKey="1">
        <Accordion.Header><h8 className="fw-bold text-center">Syarat dan Ketentuan</h8></Accordion.Header>
        <Accordion.Body>
        <CardGroup>
      <Card>
        <Card.Body>
          <Card.Text className="text-left">
          <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga sudah termasuk biaya admin</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga sudah termasuk biaya sewa perangkat</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga belum termasuk PPN 11%</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga dan paket berlaku untuk area dan periode tertentu</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Harga dan paket dapat berubah sewaktu-waktu</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Tambahan sewa STB Rp. 40.000/bulan</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Maksimal 2 STB dalam 1 lokasi</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Persediaan terbatas</td>
            </tr>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Paket;