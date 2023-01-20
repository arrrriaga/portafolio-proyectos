import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const buttonVariants = {
  visible: {
    x: [0, -10, 10, -10, 10, 0],
    rotate: [0, -10, 10, -10, 10, 0],
    transition: {
      delay: 3,
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2,
      repeatType: "reverse",
    },
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

const containerVariants = {
  exit: {
    scale: 0.9,
    x: [0, 600, -3000],
    y: [0, 200, -70, -70],
    rotate: [0, -90, -90],
    transition: {
      duration: 1.3,
    },
  },
};

const Home = () => {
  return (
    <Container>
      <Row className="Row1 ">
        <Col className="d-flex flex-col align-items-center justify-content-center">
          <Row>
            <Col>
              <motion.div
                className="startButtonHome d-flex justify-content-center mt-3"
                transition={{ duration: 2.5 }}
                animate={{
                  scale: [0, 0, 0.8, 0.8, 1.5],
                  y: [100, 100, 100, 0],
                }}
              >
                <Link to="/base">
                  <motion.button
                    variants={buttonVariants}
                    animate="visible"
                    whileHover="hover"
                    exit={{
                      x: [0, 0, -3000],
                      transition: {
                        duration: 0.8,
                        delay: 0.38,
                      },
                    }}
                  >
                    Start
                  </motion.button>
                </Link>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col>
              <motion.div
                className="welcomeTitle text-center"
                transition={{ duration: 2.5 }}
                animate={{
                  scale: [0.1, 0.1, 0.5, 0.5, 1],
                  opacity: [0, 1],
                  y: [-1000, -1000, 200, 0],
                  color: "#ffff",
                }}
                variants={containerVariants}
                exit="exit"
              >
                <h2> Welcome to my Portfolio</h2>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
