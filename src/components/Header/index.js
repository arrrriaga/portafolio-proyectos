import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import profile from "../../images/profile.jpg";

import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col className="titleContainetHeader d-flex justify-content-start ">
                <motion.div
                  className="logo m-2"
                  animate={{
                    x: [3000, 0],
                    y: [-50, -20, 0],
                    rotate: [500, 0],
                    transition: { type: `spring`, delay: 2, duration: 4 },
                  }}
                >
                  <motion.img
                    className="profileP"
                    src={profile}
                    alt="PROFILE"
                  ></motion.img>
                </motion.div>
                <motion.div
                  className="title"
                  transition={{ delay: 2, duration: 2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h1>Francisco Arriaga Velasco </h1>
                </motion.div>
              </Col>
            </Row>
            <Row>
              <motion.div
                className="subtitleFooter d-flex justify-content-center align-items-center"
                transition={{ delay: 4, duration: 2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3
                  className="text-center"
                  style={{ color: "rgb(107, 127, 143)" }}
                >
                  FULLSTACK WEB DEVELOPER
                </h3>
              </motion.div>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
