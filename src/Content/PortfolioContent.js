import Tlalli from "../images/Tlalli.png";
import Wma from "../images/Wma.png";
import Rest from "../images/Rest.png";
import Lpsk from "../images/Lpsk.png";

const ContenidoRestauranteApp = {
  imagen: Rest,
  URL: "https://lashamburguesasdeldon.netlify.app/",
  title: "Restaurante App",
  title2: "Resumen:",
  lp: {
    li1: {
      lip: "Descripción:",
      lis: "Landing Page de restaurante que permite hacer reservaciones y que estas aparezcan en una página de administradores",
    },
    li2: {
      lip: "Tecnología utilizada:",
      lis: "React, React-Bootstrap, Firebase",
    },
    li3: { lip: "URL:", lis: "https://lashamburguesasdeldon.netlify.app/" },
  },
};
const ContenidoEComerce = {
  imagen: Tlalli,
  URL: "https://tlalli-skincare.netlify.app/",
  title: "E-comerce",
  title2: "Resumen:",
  lp: {
    li1: {
      lip: "Descripción:",
      lis: "E-comerce que permite compras por paypal. Los usuarios y administradores pueden iniciar sesión o crear una nueva cuenta. A los administradores se les permite crear, borrar y editar productos.",
    },
    li2: {
      lip: "Tecnología utilizada:",
      lis: "React, React-Bootstrap, Mongoose, paypal, Json-webtoken",
    },
    li3: { lip: "URL:", lis: "https://tlalli-skincare.netlify.app/" },
  },
};

const ContenidoWeatherMapApp = {
  imagen: Wma,
  URL: "https://arrrriaga.github.io/WeatherMAPapp/",
  title: "Weather Map App",
  title2: "Resumen:",
  lp: {
    li1: {
      lip: "Descripción:",
      lis: "Herramienta que permite consultar la temperatura de cualquier parte del mundo y captura los datos en una gráfica con sólo arrastrar y soltar el puntero del mapa. Utiliza los servicios de google.",
    },
    li2: {
      lip: "Tecnología utilizada:",
      lis: "Servicios de google, HTML, CSS, Javascript y Bootstrap",
    },
    li3: { lip: "URL:", lis: "https://arrrriaga.github.io/WeatherMAPapp/" },
  },
};

const ContenidoLandingPageSkinCare = {
  imagen: Lpsk,
  URL: "https://arrrriaga.github.io/Landing_Page_SkinCare/",
  title: "Landing Page Skin Care",
  title2: "Resumen:",
  lp: {
    li1: {
      lip: "Descripción:",
      lis: "Landing Page de restaurante para presentación de marca. Se destaca por la belleza del UI.",
    },
    li2: {
      lip: "Tecnología utilizada:",
      lis: "HTML, CSS, Bootstrap",
    },
    li3: {
      lip: "URL:",
      lis: "https://arrrriaga.github.io/Landing_Page_SkinCare/",
    },
  },
};

export {
  ContenidoRestauranteApp,
  ContenidoEComerce,
  ContenidoWeatherMapApp,
  ContenidoLandingPageSkinCare,
};
