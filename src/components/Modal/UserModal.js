import "./Modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { ContenidoAbout2, ContenidoContact2 } from "../../Content/UserContent";
import { useEffect, useState } from "react";

const UserModal = ({ closeModal, dataModal }) => {
  const [contenido2, setContenido2] = useState({});

  const setearContenidoAbout = () => {
    setContenido2(ContenidoAbout2);
  };
  const setearContenidoContact = () => {
    setContenido2(ContenidoContact2);
  };

  useEffect(
    () => {
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
                  {contenido2.title}
                  <img
                    className="profileP"
                    src={contenido2.imagen}
                    alt="PROFILE"
                  ></img>
                </h3>
              </Col>
            </Row>

            <Row className="cuerpo d-flex justify-content-center ">
              <Col
                xm={12}
                md={3}
                className="col-left d-flex justify-content-center align-items-center"
              >
                <h4 className="text-center">{contenido2.title2}</h4>
              </Col>
              <Col xm={12} md={6}>
                <Row>
                  <br />
                  <ul>
                    {contenido2.lp
                      ? Object.values(contenido2.lp).map((item) => (
                          <li key={item.lip.a}>
                            {item.lip}
                            <ul>
                              <li className="subItem">{item.lis}</li>
                            </ul>
                          </li>
                        ))
                      : null}
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

export { UserModal };
