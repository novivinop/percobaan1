import { Container, Row, Card, CardGroup, Button, Col } from 'react-bootstrap';

const Paket = () => {
  return (
    <div>
     <Container className="mt-5">
      <h3 className="fw-bold text-center">Pilihan Paket Internet</h3>
        <p className="mt-4 text-center">Sesuaikan dengan kebutuhan internet kamu!</p>
      <Row className="mt-3 g-2">
        <CardGroup className="box-shadow">
      <Card>
        <Card.Img variant="top" src="/image/img_wifi.jpg" />
        <Card.Body>
          <Card.Title className="text-center">Up to 20 Mbps</Card.Title>
          <Card.Text className="text-center">
           Unlimited Qouta
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Row className="justify-content-md-center">
        <Col className="center" md="4"> 
          <Button variant="success" className="d-flex" href="/DataPengguna">
           Saya Mau Ini
          </Button>
        </Col>
      </Row>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/image/img_wifi2.jpg" />
        <Card.Body>
          <Card.Title className="text-center">Card title</Card.Title>
          <Card.Text className="text-center">
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      
      <Row className="justify-content-md-center">
        <Col className="center" md="4"> 
          <Button variant="success" className="d-flex" href="/DataPengguna">
           Saya Mau Ini
          </Button>
        </Col>
      </Row>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/image/img_wifi3.jpg" />
        <Card.Body>
          <Card.Title className="text-center">Card title</Card.Title>
          <Card.Text className="text-center">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Row className="justify-content-md-center">
        <Col className="center" md="4"> 
          <Button variant="success" className="d-flex" href="/DataPengguna">
           Saya Mau Ini
          </Button>
        </Col>
      </Row>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Row>
    </Container>
    </div>
  );
};

export default Paket;