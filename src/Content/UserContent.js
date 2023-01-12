import React from "react";
import profile from "../images/profile.jpg";

const ContenidoAbout2 = {
  imagenProfile: profile,
  title: "👋🏽 Hi, I'm Francisco",
  title2: "EDUCACIÓN:",
  lp: {
    li1: {
      lip: "LIC. INGENIERÍA MECATRÓNICA:",
      lis: "UNIVERSIDAD LA SALLE CUERNAVACA",
    },
    li2: {
      lip: "BOOTCAMP ROGRAMACIÓN WEB FULLSTACK:",
      lis: "UNIVERSIDAD UTEL",
    },
    li3: { lip: "INGLÉS AVANZADO:", lis: "CELE UAEM" },
  },
};
const ContenidoContact2 = {
  imagenProfile: profile,
  title: "👋🏽 Hi, I'm Francisco",
  title2: "Contact me:",
  lp: {
    li1: {
      lip: (
        <a href="mailto:arriaga.francisco@outlook.com">
          <i className="fa-2x fa-at"> 👈🏽</i>
        </a>
      ),
      lis: "arriaga.francisco@outlook.com",
    },
    li2: {
      lip: (
        <a href="https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/">
          <i className="fa-2x fa-brands fa-linkedin"> 👈🏽</i>
        </a>
      ),
      lis: "https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/",
    },
    li3: {
      lip: (
        <a href="https://wa.me/qr/RU3P4HAMEZVCC1">
          <i className="fa-2x fa-brands fa-whatsapp"> 👈🏽</i>
        </a>
      ),
      lis: "https://wa.me/qr/RU3P4HAMEZVCC1",
    },
  },
};

export { ContenidoAbout2, ContenidoContact2 };
