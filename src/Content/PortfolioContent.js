import React from "react";
import Tlalli from "../images/Tlalli.png";
import Wma from "../images/Wma.png";
import Rest from "../images/Rest.png";
import Lpsk from "../images/Lpsk.png";

const ContenidoRestauranteApp = {
  imagen: Rest,
  URL: "https://lashamburguesasdeldon.netlify.app/",
  title: "Restaurante App",
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
const ContenidoEComerce = {
  imagen: Tlalli,
  URL: "https://tlalli-skincare.netlify.app/",
  title: "E-comerce",
  title2: "Contact me:",
  lp: {
    li1: {
      lip: (
        <a
          href="mailto:arriaga.francisco@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-2x fa-at"> 👈🏽</i>
        </a>
      ),
      lis: "arriaga.francisco@outlook.com",
    },
    li2: {
      lip: (
        <a
          href="https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-2x fa-brands fa-linkedin"> 👈🏽</i>
        </a>
      ),
      lis: "https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/",
    },
    li3: {
      lip: (
        <a
          href="https://wa.me/qr/RU3P4HAMEZVCC1"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-2x fa-brands fa-whatsapp"> 👈🏽</i>
        </a>
      ),
      lis: "https://wa.me/qr/RU3P4HAMEZVCC1",
    },
  },
};

const ContenidoWeatherMapApp = {
  imagen: Wma,
  URL: "https://arrrriaga.github.io/WeatherMAPapp/",
  title: "Weather Map App",
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

const ContenidoLandingPageSkinCare = {
  imagen: Lpsk,
  URL: "https://arrrriaga.github.io/Landing_Page_SkinCare/",
  title: "Landing Page Skin Care",
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

export {
  ContenidoRestauranteApp,
  ContenidoEComerce,
  ContenidoWeatherMapApp,
  ContenidoLandingPageSkinCare,
};
