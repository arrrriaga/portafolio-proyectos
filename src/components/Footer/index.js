import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const buttonVariants = {
  hover: {
    scale: 1.1,
    origin: 0,
    x: 0,
    rotate: 0,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

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
          <Col className="d-flex justify-content-center mb-3">
            <a
              href="./Francisco_Arriaga_Fullstack_Web.pdf"
              download
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
              variants={buttonVariants}
              whileHover="hover"
            >
              <motion.button
                className="text-center text-justify align-items-center "
                variants={buttonVariants}
                whileHover="hover"
              >
                Descarga un resumen <i class="fa-2x fa-solid fa-arrow-down"></i>
                <i class="fa-2x fa-solid fa-file-pdf"></i>
              </motion.button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://wa.me/qr/RU3P4HAMEZVCC1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-2x fa-brands fa-whatsapp"></i>
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/arrrriaga"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-2x fa-brands fa-github"></i>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-2x fa-brands fa-linkedin"></i>
            </a>
          </Col>
          <Col>
            <a
              href="mailto:arriaga.francisco@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-2x fa-at" />
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
