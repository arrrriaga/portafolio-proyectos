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
              <motion.li
                key={"1"}
                onClick={() => {
                  setDataModal("About");
                  setShowModal(true);
                }}
                variants={listItem}
                whileHover="hover"
                transition="visible"
              >
                <span>Restaurante App</span>
              </motion.li>

              <motion.li
                key={"2"}
                onClick={() => {
                  setDataModal("Contact");
                  setShowModal(true);
                }}
                variants={listItem}
                whileHover="hover"
                transition="visible"
              >
                <span>E-comerce</span>
              </motion.li>

              <motion.li
                key={"3"}
                onClick={() => {
                  setDataModal("Contact");
                  setShowModal(true);
                }}
                variants={listItem}
                whileHover="hover"
                transition="visible"
              >
                <span>Weather Map App</span>
              </motion.li>

              <motion.li
                key={"4"}
                onClick={() => {
                  setDataModal("Contact");
                  setShowModal(true);
                }}
                variants={listItem}
                whileHover="hover"
                transition="visible"
              >
                <span>Landing Page Skin Care</span>
              </motion.li>

              <motion.li
                key={"5"}
                onClick={() => {
                  setDataModal("Contact");
                  setShowModal(true);
                }}
                variants={listItem}
                whileHover="hover"
                transition="visible"
              >
                <span>Control Crud</span>
              </motion.li>
            </ul>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Portfolio;
