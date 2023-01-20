import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";
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
    "Restaurant App",
    "E-comerce",
    "Weather Map App",
    "Landing Page Skin Care",
  ];

  return (
    <Container>
      <Row className="Row1">
        <Col className="d-flex flex-col align-items-center justify-content-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Row>
              <Col className="portfolio-li d-flex justify-content-center">
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
            <Row>
              <Col className="d-flex justify-content-center">
                <Link to={"/base"}>
                  <motion.button
                    className="portfolioButton"
                    variants={buttonVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                  >
                    Go back
                  </motion.button>
                </Link>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
