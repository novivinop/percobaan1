import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" variant="light" sticky="top">
  <Container>
    <Navbar.Brand href="/" className="fw-bold">
      <img
        alt=""
        src="/image/img_logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Nusa Berkah Net
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <NavDropdown title="Paket" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/Product">Paket Internet Premium</NavDropdown.Item>
          <NavDropdown.Item href="/Product">Paket Internet Premium + Set Up Box</NavDropdown.Item>
          <NavDropdown.Item href="/Product">Paket Internet Premium + CCTV</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/tvprogram">Daftar Channel</Nav.Link>
        <Nav.Link href="/AboutUs">Tentang Kami</Nav.Link>
        <NavDropdown title="Bantuan & Dukungan" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/faqpage">FAQ</NavDropdown.Item>
          <NavDropdown.Item href="/contactus">Hubungi Kami</NavDropdown.Item>
        </NavDropdown>
        <Button href="https://api.whatsapp.com/send/?phone=6281210067843" className="btn-sewa">Daftar Sekarang</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header