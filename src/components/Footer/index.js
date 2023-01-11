import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  const containerVariants = {
    hidden: {
      y: "100vw",
    },
    visible: {
      y: 0,
      transition: {
        delay: 1.5,
        duration: 3,
        type: `spring`,
      },
    },
  };
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container fluid className="FooterContainer text-center py-3">
        <Row>
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
    </motion.footer>
  );
};

export default FooterComponent;
