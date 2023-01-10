import React from "react";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "200px",
      opacity: 1,
      transition: {},
    },
  };
  return (
    <AnimatePresence mode="await">
      <motion.div
        className="modal"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <p>¿HomePage?</p>

        <button onClick={() => console.log("Hola mundo")}>Start again</button>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
