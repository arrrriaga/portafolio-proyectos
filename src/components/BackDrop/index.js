import React from "react";
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
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence mode="await">
      {showModal && (
        <>
          <motion.div
            onClick={handleClick}
            className="backdrop"
            variants={backDrop}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <Modal />
        </>
      )}
    </AnimatePresence>
  );
};

export { Backdrop };
