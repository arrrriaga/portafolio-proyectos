import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    y: [200, 400, 50, 50],
    rotate: [0, -90, -90],
    transition: {
      duration: 1.3,
    },
  },
};

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        transition={{ duration: 2.5 }}
        animate={{
          scale: [0, 0, 1, 2, 2],
          opacity: [0, 1],
          y: [-1000, -1000, 400, 200],
          color: "#ffff",
        }}
        variants={containerVariants}
        exit="exit"
      >
        Welcome to my Portfolio
      </motion.h2>
      <motion.div
        transition={{ duration: 2.5 }}
        animate={{
          scale: [0, 1, 1, 1, 1.5],
          y: [200, 200, 200, 0],
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
    </div>
  );
};

export default Home;
