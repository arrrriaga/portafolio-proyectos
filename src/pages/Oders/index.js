import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    y: 180,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: [180, 180, 0],
    transition: {
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
const Order = ({ pizza }) => {
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
    </motion.div>
  );
};

export default Order;
