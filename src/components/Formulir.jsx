import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Formulir = () => {
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
            <h2 className="fw-bold lh-base w-75">
              Layanan Internet terbaik di kawasan Bekasi
            </h2>
            <p className="w-75 mt-3">Isi data kamu dulu yuk</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>Nama Lengkap*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap Kamu"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="emailkamu@domain.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </Form.Group>

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

              <Button variant="primary" className="d-flex" href="/detailalamat">
                Selanjutnya
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulir;
