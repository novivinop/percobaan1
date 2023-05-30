// import React  from 'react';
// import { Container, Row, Col, Card, Form, InputGroup, Button, Tab, ListGroup} from 'react-bootstrap';

// const images = [
//   {
//     src: './image/img_contact.png',
//     alt: 'Image 1',
//     subtitle1: 'Contact Center',
//     subtitle2: '0813'
//   },
//   {
//     src: './image/img_wa.png',
//     alt: 'Image 2',
//     subtitle1: 'Whatsapp',
//     subtitle2: '0812 1006 7843'
//   },
//   {
//     src: './image/img_email.png',
//     alt: 'Image 3',
//     subtitle1: 'Email',
//     subtitle2: 'hendronoviantom021003@gmail.com'
//   },
// ];

// const Contact= () => {
//   return (
//     <Container className="nav-background">
//        <div className="text-center mt-5">
//           <h2 className="fw-bold">HUBUNGI KAMI</h2>
//       </div>
//         {/* <Row className="text-center mt-5"> */}
//       <Row className="justify-content-md-center mt-5">
//         {images.map((image, index) => (
//           <Col md={3} key={index}>
//             <Card >
//               <Card.Body className="text-center">
//               <img
//         alt={image.alt}
//         src={image.src}
//         width="25%"
//         className="d-inline-block align-top"
//       />{' '}
//                 <Card.Subtitle className="mt-3">{image.subtitle1}</Card.Subtitle>
//                 <Card.Subtitle className="mt-3">{image.subtitle2}</Card.Subtitle>
//               </Card.Body>
//             </Card>
//             <br></br>
//           </Col>
//         ))}
//       </Row>
//       {/* </Row> */}
//       <Col className="ps-md-0 mt-5">
// 	    <div className="center">
//       <h2 className="fw-bold lh-base text-center">ALAMAT KANTOR</h2>
      
//       <Row className="justify-content-md-center">
//       <Col className="d-flex center" md="9"> 
//       <Form.Control type="address" placeholder="Cari berdasarkan kota" />
//       <Button variant="primary" id="button-addon2">
//           Cari
//         </Button>
//       </Col>
//       </Row>

//       <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
//       <Row className="justify-content-md-center mt-1">
//         <Col sm={8}>
//           <ListGroup>
//             <ListGroup.Item action href="#link1">
//              <h6 className="fw-bold">Kantor Pusat</h6>
//              <p>Permata Nusa Indah Blok B9 No.6 Muktiwari, Cibitung, Kab. Bekasi, Jawa Barat</p>
//             </ListGroup.Item>
//             <ListGroup.Item action href="#link2">
//               <h6 className="fw-bold">Kantor Cabang</h6>
//               <p>Jalan Lumbu Tengah IV E Blok 9 No. 317 Rt.005 Rw. 029, Rawalumbu, Kota Bekasi, Jawa Barat</p>
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <br />
//         <Col sm={8}>
//           <Tab.Content>
//             <Tab.Pane eventKey="#link1">
//       <div className="text-center mt-1">     
//       <iframe width="850" height="320" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=permata%20nusa%20indah%20blok%20b9%20cibitung+(Title)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//       </div>
//       </Tab.Pane>
//             <Tab.Pane eventKey="#link2">
//             <div className="text-center mt-1">
//       <iframe width="850" height="320" id="gmap_canvas" className="img-border" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jembatan 13 rawalumbu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//       </div>
//       </Tab.Pane>
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
      
//       {/* <div className="background border text-center">
//       <iframe width="1000" height="250" id="gmap_canvas" className="img-border" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jembatan 13 rawalumbu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//       </div>
//       <div className="background border text-center">
//       <iframe width="1000" height="250" id="gmap_canvas" className="img-border" src="https://maps.google.com/maps?q=bekasi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//       </div> */}
      
//       {/* <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
//         <Form.Control type="address" placeholder="Tulis nama jalan / gedung / perumahan" />
//         <Form.Text className="text-muted">
//           Izinkan akses lokasi di browser kamu
//         </Form.Text>
//       </Form.Group> */}
      

//     </div>
//     </Col>
//     </Container>
//   );
// };

// export default Contact;
import React  from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, Tab, ListGroup} from 'react-bootstrap';



const images = [
  {
    src: './image/img_contact.png',
    alt: 'Image 1',
    subtitle1: 'Contact Center',
    subtitle2: '0823 1126 3211'
  },
  {
    src: './image/img_wa.png',
    alt: 'Image 2',
    subtitle1: 'Whatsapp',
    subtitle2: '0812 1006 7843'
  },
  {
    src: './image/img_email.png',
    alt: 'Image 3',
    subtitle1: 'Email',
    subtitle2: 'hendronoviantom021003@gmail.com'
  },
];

const Contact= () => {
  return (
    <Container className="nav-background">
       <div className="text-center">
        <img
        className="d-block w-100 reduce-height"
        src="./image/img_cp.png"
        alt="Gambar TV"
        style={{ height: '350px' }} 
      />
        <div className="text-overlay">
          <h1 className="fw-bold mb-3">HUBUNGI KAMI</h1>
          <div className="line-horizontal-overlay"></div>
          <h4 className="text-white fs-6 fw-dark mt-4">Nusa Berkah Net hadir untuk memenuhi kebutuhan digital Anda!</h4>
          </div>
      </div>
       {/* <div className="text-center ">
          <h2 className="fw-bold lh-base ">HUBUNGI KAMI</h2>
          <div className="line-horizontal"></div>
      </div> */}
        {/* <Row className="text-center mt-5"> */}
        <div className="mobile-padding">
      <Row className="justify-content-md-center mt-5">
        {images.map((image, index) => (
          <Col md={3} key={index}>
            <Card >
              <Card.Body className="text-center">
              <img
        alt={image.alt}
        src={image.src}
        width="25%"
        className="d-inline-block align-top"
      />{' '}
                <Card.Subtitle className="mt-3">{image.subtitle1}</Card.Subtitle>
                <Card.Subtitle className="mt-3">{image.subtitle2}</Card.Subtitle>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        ))}
      </Row>
      {/* </Row> */}
      <Col className="ps-md-0 mt-5">
	    <div className="center">
      <h2 className="fw-bold lh-base text-center">ALAMAT KANTOR</h2>
      <div className="line-horizontal"></div>
      
      <Row className="justify-content-md-center mt-4">
      <Col className="d-flex center" md="9"> 
      <Form.Control type="address" placeholder="Cari berdasarkan kota" />
      <Button style={{backgroundColor: "#7D9D9C"}} variant="outline-light" id="button-addon2">
          Cari
        </Button>
      </Col>
      </Row>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className="justify-content-md-center mt-1">
        <Col sm={8}>
          <ListGroup>
            <ListGroup.Item action href="#link1" className="mt-2" >
             <h6 className="fw-bold">Kantor Pusat</h6>
             <p>Permata Nusa Indah Blok B9 No.6 Muktiwari, Cibitung, Kab. Bekasi, Jawa Barat</p>
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" >
              <h6 className="fw-bold">Kantor Cabang</h6>
              <p>Jalan Lumbu Tengah IV E Blok 9 No. 317 Rt.005 Rw. 029, Rawalumbu, Kota Bekasi, Jawa Barat</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <br />
        <Col md={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
      <div className="text-center mt-1">     
      <iframe width="100%" height="320" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=permata%20nusa%20indah%20blok%20b9%20cibitung+(Title)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </Tab.Pane>
            <Tab.Pane eventKey="#link2">
            <div className="text-center mt-1">
      <iframe width="100%" height="320" id="gmap_canvas" className="img-border" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jembatan 13 rawalumbu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      
      {/* <div className="background border text-center">
      <iframe width="1000" height="250" id="gmap_canvas" className="img-border" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jembatan 13 rawalumbu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      <div className="background border text-center">
      <iframe width="1000" height="250" id="gmap_canvas" className="img-border" src="https://maps.google.com/maps?q=bekasi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div> */}
      
      {/* <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Control type="address" placeholder="Tulis nama jalan / gedung / perumahan" />
        <Form.Text className="text-muted">
          Izinkan akses lokasi di browser kamu
        </Form.Text>
      </Form.Group> */}
      

    </div>
    </Col>
    </div>
    </Container>
  );
};

export default Contact;