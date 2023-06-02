import { Container, Row, Card, Button, Col } from 'react-bootstrap';

const fontSize = 40;
const images = [
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'Business 100',
    href: 'https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Paket%20Internet%20Bisnis%20KSO%20100%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To Your Business',
    subtitle2: 'Up To 100 Mbps',
    subtitle3: 'Download/Upload',
    subtitle4: 'Unlimited Quota',
    subtitle5: '1 IP Public Static',
    subtitle6: 'CS Prioritas 24 Jam',
    subtitle7: 'Rp. 2.500.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'Business 200',
    href: 'https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Paket%20Internet%20Bisnis%20KSO%20200%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To Your Business',
    subtitle2: 'Up To 200 Mbps',
    subtitle3: 'Download/Upload',
    subtitle4: 'Unlimited Quota',
    subtitle5: '1 IP Public Static',
    subtitle6: 'CS Prioritas 24 Jam',
    subtitle7: 'Rp. 3.500.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'Business 300',
    href: 'https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Paket%20Internet%20Bisnis%20KSO%20300%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To Your Business',
    subtitle2: 'Up To 300 Mbps',
    subtitle3: 'Download/Upload',
    subtitle4: 'Unlimited Quota',
    subtitle5: '1 IP Public Static',
    subtitle6: 'CS Prioritas 24 Jam',
    subtitle7: 'Rp. 4.500.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'Business 400',
    href: 'https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Paket%20Internet%20Bisnis%20KSO%20400%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To Your Business',
    subtitle2: 'Up To 400 Mbps',
    subtitle3: 'Download/Upload',
    subtitle4: 'Unlimited Quota',
    subtitle5: '1 IP Public Static',
    subtitle6: 'CS Prioritas 24 Jam',
    subtitle7: 'Rp. 5.500.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: 'Business 500',
    href: 'https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Paket%20Internet%20Bisnis%20KSO%20500%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To Your Business',
    subtitle2: 'Up To 100 Mbps',
    subtitle3: 'Download/Upload',
    subtitle4: 'Unlimited Quota',
    subtitle5: '1 IP Public Static',
    subtitle6: 'CS Prioritas 24 Jam',
    subtitle7: 'Rp. 6.500.000/bulan'
  }
];

const Bisnis = () => {
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
          <h1 className="fw-bold mb-3">PAKET INTERNET BISNIS</h1>
          <div className="line-horizontal-overlay"></div>
          <h4 className="text-white fs-6 fw-dark mt-4">Nusa Berkah Net hadir untuk memenuhi kebutuhan digital Anda dengan layanan Internet Bisnis terbaik!</h4>
          </div>
      </div>
    
     <div className="text-center mt-5 mobile-padding">
          <h4 className="fw-bold"> Daftar Paket Bisnis (KSO)</h4>
          <div className="line-horizontal">
        </div>
      
        {/* <Row className="text-center mt-5"> */}
      <Row className="justify-content-md-center mt-5">
        {images.map((image, index) => (
          <Col md={3} key={index}>
            <Card >
              <Card.Body className="text-center">
              <img
        alt={image.alt}
        src={image.src}
        width="80%"
        className="d-inline-block align-top"
      />{' '}
      
      <p style={{ fontSize: `${fontSize}px` }} className="fw-bold">{image.teks}</p>
                <Card.Subtitle style={{backgroundColor: "#e9ecef"}} className="mt-1">{image.subtitle1}</Card.Subtitle>
                <Card.Subtitle style={{backgroundColor: "#e9ecef"}} className="mt-1">{image.subtitle2}</Card.Subtitle>
                <Card.Subtitle style={{backgroundColor: "#e9ecef"}} className="mt-1">{image.subtitle3}</Card.Subtitle>
                <Card.Subtitle style={{backgroundColor: "#e9ecef"}} className="mt-1">{image.subtitle4}</Card.Subtitle>
                <Card.Subtitle style={{backgroundColor: "#e9ecef"}} className="mt-1">{image.subtitle5}</Card.Subtitle>
                <Card.Subtitle style={{backgroundColor: "#e9ecef"}} className="mt-1">{image.subtitle6}</Card.Subtitle>
                <Card.Subtitle className="mt-4 fw-bold">{image.subtitle7}</Card.Subtitle>
                <Button variant="outline-light mt-3" href={image.href} style={{backgroundColor: "#7D9D9C"}}>Saya Mau Ini</Button>
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

export default Bisnis;