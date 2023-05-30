import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const fontSize = 43;
const images = [
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: '10 Mbps',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2010%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To The Home',
    subtitle2: 'Up To 10 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 120.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: '20 Mbps',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2020%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To The Home',
    subtitle2: 'Up To 20 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 170.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: '30 Mbps',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2030%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To The Home',
    subtitle2: 'Up To 30 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 270.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: '50 Mbps',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2050%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To The Home',
    subtitle2: 'Up To 50 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 430.000/bulan'
  },
  {
    src: './image/img_logowifi.png',
    alt: 'Image 1',
    teks: '100 Mbps',
    href: 'https://api.whatsapp.com/send?phone=6282122951956&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%20100%20Mbps*,%20apakah%20bisa%20dibantu?',
    subtitle1: 'Full Fiber To The Home',
    subtitle2: 'Up To 100 Mbps Download/Upload Unlimited Qouta',
    subtitle3: 'Rp. 550.000/bulan'
  }
];

const Intro = () => {
  return (
    <div>
        <Container className="nav-background">
      <Row>
        <Col className="mt-4 mx-auto" xs={12} md={12} lg={6} >
        <h2 className="fw-bold lh-base w-75">Layanan Internet terbaik di kawasan Bekasi</h2>
        <p className="w-75 mt-3">Selamat datang di Nusa Berkah Net. Kami menyediakan layanan internet kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu dalam berinternet.</p>
        <Button className="fw-bold text-white mt-3 mb-5 btn-sewa" variant="outline-light" style={{backgroundColor: "#7D9D9C"}} href="/Product">Mulai Berlangganan</Button>
        </Col>
        <Col className="mt-4 mx-auto" xs={12} md={12} lg={6}>
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
              <td>Proses instalasi mudah & cepat</td>
            </tr>
            <tr>
              <td><img src="/image/img_check.png" alt="tick" className="mt-1 me-3" /></td>
              <td>Kecepatan internet stabil dengan jaringan Fiber</td>
            </tr>
          </Col>
      </Row>
      <br>
      </br>
      <div className="text-center mt-5 mobile-padding">
          <h4 className="fw-bold"> Daftar Paket Internet Premium</h4>
          <div className="line-horizontal">
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
                <Card.Subtitle className="mt-5">{image.subtitle1}</Card.Subtitle>
                <Card.Subtitle className="mt-3">{image.subtitle2}</Card.Subtitle>
                <Card.Subtitle className="mt-4 fw-bold">{image.subtitle3}</Card.Subtitle>
                <Button variant="outline-light mt-3" href={image.href} style={{backgroundColor: "#7D9D9C"}}>Saya Mau Ini</Button>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        ))}
      </Row>
      </div>
    </Container>
    </div>
  );
};

export default Intro;