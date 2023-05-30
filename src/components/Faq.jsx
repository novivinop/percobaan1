import { Container, Accordion, Row, Col} from 'react-bootstrap';

const Faq= () => {
  return (
    <Container id="FAQ" className="mt-5">
      <Row>
        <Col md={3} xs={10}>
          <h2 className="fw-bold mb-4">Frequently Asked Question</h2>
          <p>Cari jawaban dari pertanyaan yang sering ditanyakan oleh pelanggan</p>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <h6 className="fw-bold">Apa itu Nusa Berkah Net?</h6>
        </Accordion.Header>
        <Accordion.Body>
          Nusa Berkah Net adalah penyedia layanan internet yang berbasis fiber optic dari PT Alfa Omega Net yang berpusat di Cikarang, Jawa Barat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <h6 className="fw-bold">Bagaimana cara saya mendaftar layanan Nusa Berkah Net?</h6></Accordion.Header>
        <Accordion.Body>
          Untuk melakukan pendaftaran, pastikan area Anda sudah tercakup layanan kami dengan menggubungi Contact Center atau Whatsapp yang tertera di website Nusa Berkah Net.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <h6 className="fw-bold">Data apa saja yang dibutuhkan untuk mendaftar Nusa Berkah Net?</h6></Accordion.Header>
        <Accordion.Body>
          KTP, alamat domisili, dan nomor HP yang tersambung dengan aplikasi Whatsapp.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
        <h6 className="fw-bold">Berapa Biaya Instalasi Nusa Berkah Net?</h6></Accordion.Header>
        <Accordion.Body>
          Biaya instalasi hanya dibebankan saat awal pemasangan. Biaya instalasi untuk pelanggan baru adalah sebesar Rp. 250.000. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
        <h6 className="fw-bold">Berapa lama pemasangan Nusa Berkah Net dapat dilakukan?</h6></Accordion.Header>
        <Accordion.Body>
          Pemasangan Nusa Berkah Net akan dilakukan dalam rentan waktu satu hari kerja setelah dilakukan survei lokasi sebelumnya.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
        <h6 className="fw-bold">Bagaimana saya bisa mengetahui bahwa area saya sudah tercover layanan Nusa Berkah Net?</h6></Accordion.Header>
        <Accordion.Body>
          Pengecekan coverage area bisa dilakukan dengan mengubungi kontak Nusa Berkah Net yang terdapat pada halaman Contact Us.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;