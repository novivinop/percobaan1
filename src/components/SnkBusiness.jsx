import {
  Container,
  Row,
  Card,
  Accordion,
  Col,
} from "react-bootstrap";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: isCurrentEventKey ? "#7D9D9C" : "#7D9D9C",
        fontSize: "17px", // Ganti dengan ukuran font yang diinginkan
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const snkBisnis = () => {
  return (
    <div className="mobile-padding">
      <Container className="mt-5">
        <Row className="justify-content-md-center mt-3 g-2">
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header
                  className="text-center"
                  style={{ backgroundColor: "#7D9D9C" }}
                >
                  <ContextAwareToggle eventKey="0">
                    Syarat dan Ketentuan
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Card.Text className="text-left">
                      <tr>
                        <td>
                          <img
                            src="/image/img_check.png"
                            alt="tick"
                            className="mt-1 me-3"
                          />
                        </td>
                        <td>Harga sudah termasuk biaya admin</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/image/img_check.png"
                            alt="tick"
                            className="mt-1 me-3"
                          />
                        </td>
                        <td>Harga sudah termasuk biaya sewa perangkat</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/image/img_check.png"
                            alt="tick"
                            className="mt-1 me-3"
                          />
                        </td>
                        <td>
                          Perangkat Access Point paket Business Pro 150/500 akan menjadi milik pelanggan setelah 12 bulan
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/image/img_check.png"
                            alt="tick"
                            className="mt-1 me-3"
                          />
                        </td>
                        <td>Paket dan channel dapat berubah sewaktu-waktu</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/image/img_check.png"
                            alt="tick"
                            className="mt-1 me-3"
                          />
                        </td>
                        <td>
                          Minimum kontrak 12 bulan. Pemutusan sebelum akhir masa kontrak akan dikenakan penalti sebesar Rp. 1.000.000
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/image/img_check.png"
                            alt="tick"
                            className="mt-1 me-3"
                          />
                        </td>
                        <td>Gunakan kabel untuk kecepatan maksimal</td>
                      </tr>
                    </Card.Text>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default snkBisnis;
