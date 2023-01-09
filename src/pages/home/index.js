import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  visible: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { delay: 3 },
  },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
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
          y: [0, 0, 400, 200],
          color: "#ffff",
        }}
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
          >
            Start
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
