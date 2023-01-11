import "./Modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../images/profile.jpg";

const Modal = ({ closeModal }) => {
  const contenido = {
    imagen: profile,
    title: "About me",
    title2: "EDUCACIÓN:",
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
          <Row className="contenedor">
            <Row className="titulo1">
              <Col>
                <h3>
                  {contenido.title}{" "}
                  <img className="profileP" src={profile} alt="PROFILE"></img>
                </h3>
              </Col>
            </Row>

            <Row className="cuerpo">
              <Col
                xm={12}
                md={3}
                className="col-left d-flex justify-content-center align-items-center"
              >
                <h4 className="text-center">{contenido.title2}</h4>
              </Col>
              <Col>
                <Row>
                  <br />
                  <ul>
                    <li>{contenido.LI1}</li>
                    <br />
                    <li>{contenido.LI2}</li>
                    <br />
                    <li>{contenido.LI3}</li>
                  </ul>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center" xm={3}>
                <button onClick={closeModal}>Cerrar</button>
              </Col>
            </Row>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
