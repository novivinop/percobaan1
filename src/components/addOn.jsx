import { Container, Row, Card, CardGroup, Button, Col } from 'react-bootstrap';

const fontSize = 35;
const images = [
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'STB',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20menambahkan%20Paket%20*Add-On%20Set%20Top%20Box*,%20apakah%20bisa%20dibantu?',
    src1: './image/img_stb.jpg',
    alt1: 'Image 1',
    // subtitle1: 'Full Fiber To The Home',
    // subtitle2: 'Up To 10 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 80.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'CCTV',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20menambahkan%20*Paket%20Add-On%20SetCCTV*,%20apakah%20bisa%20dibantu?',
    src1: './image/img_cctv.jpg',
    alt1: 'Image 1',
    // subtitle1: 'Combo TV 50+ Channel ',
    // subtitle2: 'Up To 20 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 80.000/bulan'
  }
];

const PaketAdd = () => {
  return (
    
    <Container className="nav-background">
       <div className="text-center">
        <img
        className="d-block w-100 reduce-height"
        src="./image/img_keyboard.png"
        alt="Gambar TV"
        style={{ height: '350px' }} 
      />
        <div className="text-overlay">
          <h1 className="fw-bold mb-3">PAKET ADD-ON</h1>
          <div className="line-horizontal-overlay"></div>
          <h4 className="text-white fs-6 fw-dark mt-4">Nusa Berkah Net hadir untuk memenuhi kebutuhan digital Anda dengan layanan paket Add-On!</h4>
          </div>
      </div>
    
     {/* <Container className="mt-5"> */}
     <div className="mobile-padding">
     <div className="text-center mt-5">
          <h4 className="fw-bold">Daftar Paket Add-On</h4>
          <div className="line-horizontal"></div>
      </div>
        {/* <Row className="text-center mt-5"> */}
      <Row className="justify-content-md-center mt-5">
        {images.map((image, index) => (
          <Col md={2} key={index}>
            <Card >
              <Card.Body className="text-center">
              <img
        alt={image.alt}
        src={image.src}
        width="80%"
        className="d-inline-block align-top"
      />{' '}
      <p style={{ fontSize: `${fontSize}px` }} className="fw-bold">{image.teks}</p>
      <img
        alt={image.alt1}
        src={image.src1}
        width="80"
        height="80"
        className="d-inline-block align-top"
      />{' '}
                <Card.Subtitle className="mt-3">{image.subtitle1}</Card.Subtitle>
                {/* <Card.Subtitle className="mt-3">{image.subtitle2}</Card.Subtitle> */}
                <Card.Subtitle className="mt-4 fw-bold">{image.subtitle3}</Card.Subtitle>
                <Button variant="outline-light mt-4 " href={image.href}style={{backgroundColor: "#7D9D9C"}}>Saya Mau Ini</Button>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        ))}
      </Row>
      </div>
      </Container>
  );
};

export default PaketAdd;