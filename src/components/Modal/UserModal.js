import "./Modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { ContenidoAbout2, ContenidoContact2 } from "../../Content/UserContent";
import {
  ContenidoRestauranteApp,
  ContenidoEComerce,
  ContenidoWeatherMapApp,
  ContenidoLandingPageSkinCare,
} from "../../Content/PortfolioContent";
import { useEffect, useState } from "react";

const UserModal = ({ closeModal, dataModal }) => {
  const [contenido2, setContenido2] = useState({});

  const setearContent = (content) => {
    setContenido2(content);
  };

  useEffect(
    () => {
      dataModal === "About"
        ? setearContent(ContenidoAbout2)
        : dataModal === "Contact"
        ? setearContent(ContenidoContact2)
        : dataModal === "Restaurante App"
        ? setearContent(ContenidoRestauranteApp)
        : dataModal === "E-comerce"
        ? setearContent(ContenidoEComerce)
        : dataModal === "Weather Map App"
        ? setearContent(ContenidoWeatherMapApp)
        : dataModal === "Landing Page Skin Care"
        ? setearContent(ContenidoLandingPageSkinCare)
        : console.log(null);
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
          <Row className="contenedor d-flex justify-content-center">
            <Row className="titulo1">
              <Col className="text-center d-flex justify-content-center">
                <h3>
                  {contenido2.title}
                  {contenido2.imagenProfile ? (
                    <img
                      className="profileP"
                      src={contenido2.imagenProfile}
                      alt="PROFILE"
                    ></img>
                  ) : (
                    <a href={contenido2.URL} target="_blank" rel="noreferrer">
                      <img
                        className="portfolioImage"
                        src={contenido2.imagen}
                        alt="PROFILE"
                      ></img>
                    </a>
                  )}
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
                      : ""}
                  </ul>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row className="ButtonContainer">
            <Col className="d-flex justify-content-center" xm={3}>
              <button onClick={closeModal}>Close</button>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export { UserModal };
