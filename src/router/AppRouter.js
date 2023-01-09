import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Base from "../pages/Base/index";
import Toppings from "../pages/Toppings";
import Orders from "../pages/Oders";

const AppRouter = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
      <Route
        path="/toppings"
        element={<Toppings addTopping={addTopping} pizza={pizza} />}
      />
      <Route path="/order" element={<Orders pizza={pizza} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
