import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      // delay: 0.3,
      duration: 2,
      type: `spring`,
      mass: 0.4,
      damping: 5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    delay: 5,
    duration: 2,
    opacity: 1,
  },
};
const Order = ({ pizza, setShowModal }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 5000);
  // }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order </h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        MODAL
      </button>
    </motion.div>
  );
};

export default Order;
