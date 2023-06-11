import { colors } from "@material-ui/core";
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          <img
            alt=""
            src="/image/img_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Nusa Berkah Net
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggleMenu}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${expanded ? "show" : ""}`}
        >
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Paket" id="collasible-nav-dropdown">
            
              <NavDropdown.Item href="/Product">
                Paket Internet Premium
              </NavDropdown.Item>
              <NavDropdown.Item href="/paketAddOn">
                Paket Add On
              </NavDropdown.Item>
              <NavDropdown.Item href="/paketBisnis">
                Paket Business
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tvprogram">Daftar Channel</Nav.Link>
            <Nav.Link href="/AboutUs">Tentang Kami</Nav.Link>
            <NavDropdown
              title="Bantuan & Dukungan"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/faqpage">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">
                Hubungi Kami
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="outline-light"
              href="https://api.whatsapp.com/send?phone=6281210067843&text=Hallo,%0ASaya%20tertarik%20dengan%20Produk%20*Nusa%20Berkah%20Net*%20lebih%20lanjut."
              style={{ backgroundColor: "#7D9D9C" }}
            >
              Daftar Sekarang
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
