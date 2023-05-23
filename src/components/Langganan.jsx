import { Container, Card, Button } from 'react-bootstrap';

const Testimoni = () => {
  return (
    <Container className="mt-5">
    <Card className="text-center text-white p-5" style={{backgroundColor: "#576F72"}}>
          <Card.Body>
            <h2 className="fw-bold">Pilih internet berkualitas di Bekasi sekarang</h2>
            <Card.Body className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            </Card.Body>
              <Button className="fw-bold text-white btn-sewa" href="/Product">Mulai Berlangganan</Button>
          </Card.Body>
        </Card>
    </Container>
  );
};

export default Testimoni;