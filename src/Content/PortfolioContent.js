import Tlalli from "../images/Tlalli.png";
import Wma from "../images/Wma.png";
import Rest from "../images/Rest.png";
import Lpsk from "../images/Lpsk.png";

const ContenidoRestaurantApp = {
  imagen: Rest,
  URL: "https://lashamburguesasdeldon.netlify.app/",
  title: "Restaurant App",
  sections: {
    s1: {
      title2: "Summary:",
      lp: {
        li1: {
          lip: "Description:",
          lis: "Restaurant landing Page that allows you to make reservations and have them appear on an administrators page.",
        },
        li2: {
          lip: "Technology:",
          lis: "React, React-Bootstrap, Firebase",
        },
        li3: { lip: "URL:", lis: "https://lashamburguesasdeldon.netlify.app/" },
      },
    },
  },
};
const ContenidoEComerce = {
  imagen: Tlalli,
  URL: "https://tlalli-skincare.netlify.app/",
  title: "E-comerce",
  sections: {
    s1: {
      title2: "Summary:",
      lp: {
        li1: {
          lip: "Description:",
          lis: "E-comerce that allows you to pay through paypal. Users and administrators can login or create a new account. Administrators are allowed to create, delete and edit products.",
        },
        li2: {
          lip: "Technology:",
          lis: "React, React-Bootstrap, Mongoose, paypal, Json-webtoken",
        },
        li3: { lip: "URL:", lis: "https://tlalli-skincare.netlify.app/" },
      },
    },
  },
};

const ContenidoWeatherMapApp = {
  imagen: Wma,
  URL: "https://arrrriaga.github.io/WeatherMAPapp/",
  title: "Weather Map App",
  sections: {
    s1: {
      title2: "Summary:",
      lp: {
        li1: {
          lip: "Description:",
          lis: "Tool that allows you to check the temperature of any city in the world and captures the data in a graph by simply dragging and dropping the map pointer. It use google services.",
        },
        li2: {
          lip: "Technology:",
          lis: "Google API, HTML, CSS, Javascript y Bootstrap",
        },
        li3: { lip: "URL:", lis: "https://arrrriaga.github.io/WeatherMAPapp/" },
      },
    },
  },
};

const ContenidoLandingPageSkinCare = {
  imagen: Lpsk,
  URL: "https://arrrriaga.github.io/Landing_Page_SkinCare/",
  title: "Landing Page Skin Care",
  sections: {
    s1: {
      title2: "Summary:",
      lp: {
        li1: {
          lip: "Description:",
          lis: "Restaurant Landing Page for brand presentation. It stands out for the beauty of the UI.",
        },
        li2: {
          lip: "Technology:",
          lis: "HTML, CSS, Bootstrap",
        },
        li3: {
          lip: "URL:",
          lis: "https://arrrriaga.github.io/Landing_Page_SkinCare/",
        },
      },
    },
  },
};

export {
  ContenidoRestaurantApp,
  ContenidoEComerce,
  ContenidoWeatherMapApp,
  ContenidoLandingPageSkinCare,
};
