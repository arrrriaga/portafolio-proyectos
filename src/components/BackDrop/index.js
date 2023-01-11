import React from "react";
import "./Backdrop.css";
import { Modal } from "../Modal";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backDrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Backdrop = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence mode="await">
      {showModal && (
        <>
          <motion.div
            onClick={closeModal}
            className="backdrop"
            variants={backDrop}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <Modal closeModal={closeModal} />
        </>
      )}
    </AnimatePresence>
  );
};

export { Backdrop };
