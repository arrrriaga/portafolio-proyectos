import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const pdfUrl = "../../documentos/CV.pdf";
    const response = await fetch(pdfUrl);
    const pdfBlob = await response.blob();
    const pdfLink = document.createElement("a");
    pdfLink.href = window.URL.createObjectURL(pdfBlob);
    pdfLink.download = "your-file.pdf";
    pdfLink.click();
    setIsDownloading(false);
  };

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

        <button onClick={handleDownload} disabled={isDownloading}>
          {isDownloading ? "Descargando..." : "Descargar PDF"}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
