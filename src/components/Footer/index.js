import React from "react";
import "./Footer.css";
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
      <Container fluid className="FooterContainer text-center ">
        <Row>
          <Col className="d-flex justify-content-center">
            <a
              href="./Francisco_Arriaga_Fullstack_Web.pdf"
              download
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <motion.button
                className="downloadButtonFooter"
                variants={buttonVariants}
                whileHover="hover"
              >
                Download my CV
                <i> </i>
                <i className=" fa-solid fa-arrow-down fa-xl"></i>
                <i className="fa-solid fa-file-pdf fa-xl"></i>
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
              <i className="fa-2x fa-solid fa-envelope"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="linksText">Contact links</Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default FooterComponent;
