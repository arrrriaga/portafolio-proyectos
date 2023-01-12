import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";

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
        </Row>
      </div>
    </motion.div>
  );
};

export default Portfolio;
