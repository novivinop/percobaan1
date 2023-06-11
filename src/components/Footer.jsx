import { Container, Row, Col } from "react-bootstrap";
import Statcounter from "./Statcounter";

const Footer = () => {
  return (
    <dir>
      <Statcounter />
      <Container className="mt-5 footer" style={{ backgroundColor: "#f1f3ff" }}>
        <Row className="g-6">
          <Col xs={12} md={4}>
            © 2023 All rights reserved.
          </Col>
        </Row>
      </Container>
    </dir>
  );
};

export default Footer;
