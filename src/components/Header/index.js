import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import profile from "../../images/profile.jpg";

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo m-2"
        animate={{
          x: [3000, 0],
          y: [-50, -20, 0],
          rotate: [500, 0],
          transition: { type: `spring`, delay: 2, duration: 4 },
        }}
      >
        <motion.img
          className="profileP"
          src={profile}
          alt="PROFILE"
        ></motion.img>
      </motion.div>
      <motion.div
        className="title"
        transition={{ delay: 2, duration: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Francisco Arriaga Velasco</h1>
      </motion.div>
    </header>
  );
};

export default Header;
