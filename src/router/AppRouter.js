import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";

import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/home";
import Base from "../pages/Base/index";
import Toppings from "../pages/Toppings";
import Orders from "../pages/Oders";
import { Backdrop } from "../components/BackDrop";
import FooterComponent from "../components/Footer";

const AppRouter = () => {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      <Header />
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      <Backdrop showModal={showModal} setShowModal={setShowModal} />

      <main>
        <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />
            <Route
              path="/toppings"
              element={<Toppings addTopping={addTopping} pizza={pizza} />}
            />
            <Route
              path="/order"
              element={<Orders pizza={pizza} setShowModal={setShowModal} />}
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
