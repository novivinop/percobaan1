import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

const ListTv = () => {
  return (
    <div>
      <Container>
       <div className="text-center">
        <img 
        className="d-block w-100 reduce-height"
        src="./image/background.jpg"></img>
          <h2 className="fw-bold">TV PROGRAM</h2>
      </div>
      <div className="text-center">
      <Row className="justify-content-md-center">
          <h3>Daftar Program</h3>
          <Col xs={8}><h7>Biznet Home memiliki paket channel lengkap yang mencakup program untuk anak-anak, film, olahraga, dan masih banyak lagi. Dengan paket channel terbaik, standar High Definition (HD), serta suara jernih, Biznet Home menawarkan pengalaman menonton terbaik untuk Kamu. Biznet Home memiliki beragam tayangan menarik yang diklasifikasikan dalam beberapa kategori. Berikut daftar channel layanan Biznet Home di Jawa dan Bali.</h7>
          </Col>
      </Row>
      </div>
    </Container>
    <Container className="text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            
        
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListTv;