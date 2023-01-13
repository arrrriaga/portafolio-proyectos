import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const buttonVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },

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

const listItem = {
  hover: { scale: 1.1, originX: 0, color: "rgb(107, 127, 143)" },
  visible: { type: "spring", stiffness: 300 },
};

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: 0.3,
      type: `spring`,
    },
  },
  exit: {
    x: "-100vw",
    transition: "easeInOut",
  },
};

const Portfolio = ({ setShowModal, setDataModal }) => {
  const projects = [
    "Restaurante App",
    "E-comerce",
    "Weather Map App",
    "Landing Page Skin Care",
  ];

  return (
    <motion.div
      className="portfolio-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        <Row className="RowTitle ">
          <Col className="d-flex justify-content-center align-items-center">
            <h3 className="text-center" style={{ color: "rgb(107, 127, 143)" }}>
              FULLSTACK WEB DEVELOPER
            </h3>
          </Col>
        </Row>
        <Row className="RowBase d-flex justify-content-center">
          <Col className="d-flex justify-content-center">
            <ul>
              {projects.map((project) => {
                return (
                  <motion.li
                    key={project}
                    onClick={() => {
                      setDataModal(project);
                      setShowModal(true);
                    }}
                    variants={listItem}
                    whileHover="hover"
                    transition="visible"
                  >
                    <span>{project}</span>
                  </motion.li>
                );
              })}
            </ul>
          </Col>
          <Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Link to={"/base"}>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                  >
                    Regresar
                  </motion.button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Row>
      </div>
    </motion.div>
  );
};

export default Portfolio;
