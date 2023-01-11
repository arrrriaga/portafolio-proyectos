import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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

const Toppings = ({ addTopping, portafolioa }) => {
  let toppings = [
    "Restaurante App",
    "E-comerce",
    "Weather Map App",
    "Landing Page Skin Care",
    "Control CRUD",
  ];

  return (
    <motion.div
      className="toppings-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        <Row className="RowTitle ">
          <Col className="d-flex justify-content-center align-items-center">
            <h3>Step 2: Choose Toppings</h3>
          </Col>
        </Row>
        <Row className="RowBase d-flex justify-content-center">
          <Col className="d-flex justify-content-center">
            {" "}
            <ul>
              {toppings.map((topping) => {
                let spanClass = portafolioa.toppings.includes(topping)
                  ? "active"
                  : "";
                return (
                  <motion.li
                    key={topping}
                    onClick={() => addTopping(topping)}
                    whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className={spanClass}>{topping}</span>
                  </motion.li>
                );
              })}
            </ul>
          </Col>
        </Row>

        <Row className="RowButton">
          <Col className="d-flex justify-content-center">
            <Link to="/order">
              <motion.button variants={buttonVariants} whileHover="hover">
                Order
              </motion.button>
            </Link>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Toppings;
