import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid className="FooterContainer text-center py-0">
        <Row className="pt-2">
          <Col>
            <a href="https://wa.me/qr/RU3P4HAMEZVCC1">
              <i className="fa-2x fa-brands fa-whatsapp"></i>
            </a>
          </Col>
          <Col>
            <a href="https://github.com/arrrriaga">
              <i className="fa-2x fa-brands fa-github"></i>
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/">
              <i className="fa-2x fa-brands fa-linkedin"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>Links de contacto</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
