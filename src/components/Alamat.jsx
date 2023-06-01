import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Alamat = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form data to server or do other operations
  };

  return (
    <Container fluid className="mt-5 ps-0 h-100">
      <Row>
        <Col id="img-login" className="pe-0 ">
          <img src="/image/img_people.jpg" className="w-100" alt="imgLogin" />
        </Col>
        <Col className="ps-md-0">
          <div className="center">
            <h2 className="fw-bold lh-base w-75">Cari Lokasi Pemasangan</h2>
            <p className="w-75 mt-3">
              Cek apakah Nusa Berakah Net sudah mencakup lokasi kamu
            </p>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.82630115346!2d106.90008621842274!3d-6.284972841555117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546ad633d%3A0x79e8de8965402078!2sBekasi%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1680336317004!5m2!1sen!2sid" 
      width="600" height="250" 
      style={{ border: "0"}}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      className="img-border"></iframe> */}
            <div className="background border">
              <iframe
                width="800"
                height="250"
                id="gmap_canvas"
                className="img-border"
                src="https://maps.google.com/maps?q=bekasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Control
                  type="address"
                  placeholder="Tulis nama jalan / gedung / perumahan"
                />
                <Form.Text className="text-muted">
                  Izinkan akses lokasi di browser kamu
                </Form.Text>
              </Form.Group>
            </div>

            <Form onSubmit={handleSubmit}>
              <Row className="mt-3">
                <Col sm>
                  <Form.Group controlId="kota">
                    <Form.Label>Kota*</Form.Label>
                    <Form.Control
                      type="kota"
                      placeholder="kota"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group controlId="kecamatan">
                    <Form.Label>Kecamatan*</Form.Label>
                    <Form.Control
                      type="kecamatan"
                      placeholder="Kecamatan"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group controlId="kelurahan">
                    <Form.Label>Kelurahan*</Form.Label>
                    <Form.Control
                      type="Kelurahan"
                      placeholder="kelurahan"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="lastName">
                <Form.Label>Nomor Handphone*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nomor handphone kamu"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  Pastikan nomor yang dimasukkan aktif Whatsapp
                </Form.Text>
              </Form.Group>
              <br></br>

              <Button variant="primary" className="d-flex">
                Selanjutnya
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Alamat;
