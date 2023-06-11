import { Container, Row, Card, Button, Col } from "react-bootstrap";

const fontSize = 43;
const images = [
  {
    src: "./image/img_logowifi.png",
    alt: "Image 1",
    teks: "15 Mbps",
    href: "https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2010%20Mbps*,%20apakah%20bisa%20dibantu?",
    subtitle1: "Full Fiber To The Home",
    subtitle2: "Up To 15 Mbps Download/Upload Unlimited Qouta",
    subtitle3: "Rp. 150.000/bulan",
  },
  {
    src: "./image/img_logowifi.png",
    alt: "Image 1",
    teks: "20 Mbps",
    href: "https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2020%20Mbps*,%20apakah%20bisa%20dibantu?",
    subtitle1: "Full Fiber To The Home",
    subtitle2: "Up To 20 Mbps Download/Upload Unlimited Qouta",
    subtitle3: "Rp. 170.000/bulan",
  },
  {
    src: "./image/img_logowifi.png",
    alt: "Image 1",
    teks: "30 Mbps",
    href: "https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2030%20Mbps*,%20apakah%20bisa%20dibantu?",
    subtitle1: "Full Fiber To The Home",
    subtitle2: "Up To 30 Mbps Download/Upload Unlimited Qouta",
    subtitle3: "Rp. 270.000/bulan",
  },
  {
    src: "./image/img_logowifi.png",
    alt: "Image 1",
    teks: "50 Mbps",
    href: "https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%2050%20Mbps*,%20apakah%20bisa%20dibantu?",
    subtitle1: "Full Fiber To The Home",
    subtitle2: "Up To 50 Mbps Download/Upload Unlimited Qouta",
    subtitle3: "Rp. 430.000/bulan",
  },
  {
    src: "./image/img_logowifi.png",
    alt: "Image 1",
    teks: "100 Mbps",
    href: "https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20*Internet%20Premium%20100%20Mbps*,%20apakah%20bisa%20dibantu?",
    subtitle1: "Full Fiber To The Home",
    subtitle2: "Up To 100 Mbps Download/Upload Unlimited Qouta",
    subtitle3: "Rp. 550.000/bulan",
  },
];

const Paket = () => {
  return (
    <Container className="nav-background">
      <div className="text-center">
        <img
          className="d-block w-100 reduce-height"
          src="./image/img_keyboard.png"
          alt="Gambar TV"
          style={{ height: "350px" }}
        />
        <div className="text-overlay">
          <h1 className="fw-bold mb-3">PAKET INTERNET PREMIUM</h1>
          <div className="line-horizontal-overlay"></div>
          <h4 className="text-white fs-6 fw-dark mt-4">
            Nusa Berkah Net hadir untuk memenuhi kebutuhan digital Anda dengan
            layanan Internet Premium terbaik!
          </h4>
        </div>
      </div>

      <div className="text-center mt-5 mobile-padding">
        <h4 className="fw-bold"> Daftar Paket Internet Premium</h4>
        <div className="line-horizontal"></div>

        {/* <Row className="text-center mt-5"> */}
        <Row className="justify-content-md-center mt-5">
          {images.map((image, index) => (
            <Col md={2} key={index}>
              <Card>
                <Card.Body className="text-center">
                  <img
                    alt={image.alt}
                    src={image.src}
                    width="80%"
                    className="d-inline-block align-top"
                  />{" "}
                  <p style={{ fontSize: `${fontSize}px` }} className="fw-bold">
                    {image.teks}
                  </p>
                  <Card.Subtitle className="mt-5">
                    {image.subtitle1}
                  </Card.Subtitle>
                  <Card.Subtitle className="mt-3">
                    {image.subtitle2}
                  </Card.Subtitle>
                  <Card.Subtitle className="mt-4 fw-bold">
                    {image.subtitle3}
                  </Card.Subtitle>
                  <Button
                    variant="outline-light mt-3"
                    href={image.href}
                    style={{ backgroundColor: "#7D9D9C" }}
                  >
                    Saya Mau Ini
                  </Button>
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

export default Paket;
