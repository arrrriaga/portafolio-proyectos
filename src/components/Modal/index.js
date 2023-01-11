import "./Modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const Modal = ({ closeModal }) => {
  const contenido = {
    title: "About me",
    title2: "EDUCACIÓN: ",
    LI1: "LIC. INGENIERÍA MECATRÓNICA: UNIVERSIDAD LA SALLE CUERNAVACA",
    LI2: "BOOTCAMP ROGRAMACIÓN WEB FULLSTACK: UNIVERSIDAD UTEL",
    LI3: "INGLÉS AVANZADO: CELE UAEM",
  };
  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "10%",
      opacity: 1,
      transition: {},
    },
  };
  return (
    <AnimatePresence mode="await">
      <motion.div
        className="modal d-flex justify-content-center"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Container className="modalContainer">
          <Row>
            <h3>{contenido.title}</h3>
          </Row>
          <Row>
            {" "}
            <h4>{contenido.title2}</h4>
            <br />
            <ul>
              <li>{contenido.LI1}</li>
              <br />
              <li>{contenido.LI2}</li>
              <br />
              <li>{contenido.LI3}</li>
            </ul>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" xm={3}>
              <button onClick={closeModal}>Cerrar</button>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
