import React from "react";
import "./Base.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const listItem = {
  hover: { scale: 1.1, originX: 0, color: "#f8e112" },
  visible: { type: "spring", stiffness: 300 },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    x: 0,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
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

const nexVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Base = ({ portafolioa, setShowModal, setDataModal }) => {
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
            <h3 className="text-center">Step 1: Choose Your Base</h3>
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

              <Link to="/toppings" style={{ color: "white" }}>
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
        <Row className="RowButton ">
          <Col className="d-flex justify-content-center">
            {portafolioa.base && (
              <motion.div
                className="next"
                variants={nexVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Next
                </motion.button>
                {/* <Link to="/toppings">
                  <motion.button variants={buttonVariants} whileHover="hover">
                    Next
                  </motion.button>
                </Link> */}
              </motion.div>
            )}
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Base;
