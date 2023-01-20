import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";

import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/home";
import Base from "../pages/Base/index";
import Portfolio from "../pages/Portfolio";

import { Backdrop } from "../components/BackDrop";
import FooterComponent from "../components/Footer";

const AppRouter = () => {
  const location = useLocation();

  const [dataModal, setDataModal] = useState("hola");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />

      <Backdrop
        showModal={showModal}
        setShowModal={setShowModal}
        dataModal={dataModal}
      />

      <main>
        <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/base"
              element={
                <Base setShowModal={setShowModal} setDataModal={setDataModal} />
              }
            />
            <Route
              path="/portfolio"
              element={
                <Portfolio
                  setShowModal={setShowModal}
                  setDataModal={setDataModal}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </main>

      <FooterComponent />
    </>
  );
};

export default AppRouter;
