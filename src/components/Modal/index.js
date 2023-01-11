import "./Modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../images/profile.jpg";
import { useEffect, useState } from "react";

const Modal = ({ closeModal, dataModal }) => {
  const [contenido, setContenido] = useState({});

  const contenidoAbout = {
    imagen: profile,
    title: "👋 Hi, I'm Francisco",
    title2: "EDUCACIÓN:",
    LI1: "LIC. INGENIERÍA MECATRÓNICA:",
    LI1A: "UNIVERSIDAD LA SALLE CUERNAVACA",
    LI2: "BOOTCAMP ROGRAMACIÓN WEB FULLSTACK:",
    LI2A: "UNIVERSIDAD UTEL",
    LI3: "INGLÉS AVANZADO:",
    LI3A: "CELE UAEM",
  };
  const contenidoContact = {
    imagen: profile,
    title: "👋 Hi, I'm Francisco",
    title2: " Contact me:",
    LI1: (
      <a href="mailto:arriaga.francisco@outlook.com">
        <i className="fa-2x fa-at"></i>
      </a>
    ),
    LI1A: "arriaga.francisco@outlook.com",
    LI2: (
      <a href="https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/">
        <i className="fa-2x fa-brands fa-linkedin"></i>
      </a>
    ),
    LI2A: "https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/",
    LI3: (
      <a href="https://wa.me/qr/RU3P4HAMEZVCC1">
        <i className="fa-2x fa-brands fa-whatsapp"></i>
      </a>
    ),
    LI3A: "https://wa.me/qr/RU3P4HAMEZVCC1",
  };

  const setearContenidoAbout = () => {
    setContenido(contenidoAbout);
  };
  const setearContenidoContact = () => {
    setContenido(contenidoContact);
  };

  useEffect(
    () => {
      console.log(dataModal);
      dataModal === "About" ? setearContenidoAbout() : setearContenidoContact();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataModal]
  );

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {},
    },
    exit: {
      y: "-100vh",
    },
  };
  return (
    <AnimatePresence mode="await">
      <motion.div
        className="modal d-flex justify-content-center"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
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

            <Row className="cuerpo d-flex justify-content-center ">
              <Col
                xm={12}
                md={3}
                className="col-left d-flex justify-content-center align-items-center"
              >
                <h4 className="text-center">{contenido.title2}</h4>
              </Col>
              <Col xm={12} md={6}>
                <Row>
                  <br />
                  <ul>
                    <li>
                      {contenido.LI1}
                      <ul>
                        <li className="subItem">{contenido.LI1A}</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      {contenido.LI2}
                      <ul>
                        <li className="subItem">{contenido.LI2A}</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      {contenido.LI3}
                      <ul>
                        <li className="subItem">{contenido.LI3A}</li>
                      </ul>
                    </li>
                    {contenido.LI4A && (
                      <>
                        {" "}
                        <br />
                        <li>
                          {contenido.LI4}
                          <ul>
                            <li className="subItem">{contenido.LI4A}</li>
                          </ul>
                        </li>
                      </>
                    )}
                  </ul>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center" xm={3}>
                <button onClick={closeModal}>Close</button>
              </Col>
            </Row>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
