import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";

import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/home";
import Base from "../pages/Base/index";
import Toppings from "../pages/Portfolio";
import Orders from "../pages/Oders";
import { Backdrop } from "../components/BackDrop";
import FooterComponent from "../components/Footer";

const AppRouter = () => {
  const location = useLocation();
  const [portafolioa, setportafolioa] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setportafolioa({ ...portafolioa, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!portafolioa.toppings.includes(topping)) {
      newToppings = [...portafolioa.toppings, topping];
    } else {
      newToppings = portafolioa.toppings.filter((item) => item !== topping);
    }
    setportafolioa({ ...portafolioa, toppings: newToppings });
  };
  return (
    <div className="BodyContainer">
      <Header />
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      <Backdrop showModal={showModal} setShowModal={setShowModal} />

      <main>
        <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/base"
              element={
                <Base
                  addBase={addBase}
                  portafolioa={portafolioa}
                  setShowModal={setShowModal}
                />
              }
            />
            <Route
              path="/toppings"
              element={
                <Toppings addTopping={addTopping} portafolioa={portafolioa} />
              }
            />
            <Route
              path="/order"
              element={
                <Orders portafolioa={portafolioa} setShowModal={setShowModal} />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </main>

      <FooterComponent />
    </div>
  );
};

export default AppRouter;
