import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Testimoni = () => {
  return (
    <section>
    <Container className="mt-5">
    <Card className="text-center text-white p-3" style={{backgroundColor: "#576F72"}}>
          <Card.Body>
            <h2 className="fw-bold">Pilih internet berkualitas di Bekasi sekarang</h2>
            <Card.Body className="mb-3">
              Nusa Berkah Net hadir untuk memenuhi kebutuhan digital Anda dengan layanan Internet Premium terbaik!
            </Card.Body>
              <Button className="fw-bold text-white" style={{backgroundColor: "#E6BA95"}} href="/Product">Mulai Berlangganan</Button>
          </Card.Body>
        </Card>
    </Container>
    </section>
  );
};

export default Testimoni;