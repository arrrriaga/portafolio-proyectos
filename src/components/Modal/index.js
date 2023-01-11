import "./Modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ closeModal }) => {
  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "10%",
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

        <button onClick={closeModal}>Cerrar</button>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
