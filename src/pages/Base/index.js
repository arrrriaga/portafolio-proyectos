import React from "react";
import "./Base.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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

const Base = ({ setShowModal, setDataModal }) => {
  return (
    <motion.div
      className="base-container"
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
                <span>About me</span>
              </motion.li>

              <Link to="/portfolio" style={{ color: "white" }}>
                <motion.li
                  key={"2"}
                  variants={listItem}
                  whileHover="hover"
                  transition="visible"
                >
                  <span>Work portfolio</span>
                </motion.li>
              </Link>

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
                <span>Contact me</span>
              </motion.li>
            </ul>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Base;
