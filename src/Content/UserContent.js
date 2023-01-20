import React from "react";
import profile from "../images/profile.jpg";

const ContenidoAbout2 = {
  imagenProfile: profile,
  title: "👋🏽 Hi, I'm Francisco",
  sections: {
    S1: {
      title2: "EDUCATION:",
      lp: {
        li1: {
          lip: "BACHELOR's DEGREE IN MECHATRONIC ENGINEERING:",
          lis: "LA SALLE CUERNAVACA UNIVERSITY",
        },
        li2: {
          lip: "BOOTCAMP: FULLSTACK WEB DEELOPMENT:",
          lis: "UTEL UNIVERSITY",
        },
        li3: { lip: "ADVANCED ENGLISH:", lis: "CELE UAEM" },
      },
    },
    S2: {
      title2: "TECHNOLOGYS::",
      lp: {
        li1: {
          lip: "LANGUAGES:",
          lis: "HTML5, CSS, JAVASCRIPT",
        },
        li2: {
          lip: "LIBRARIES:",
          lis: "React, Bootstrap, MongoDB, Firebase, JsonWebToken ",
        },
        li3: {
          lip: "ENVIROMENTS:",
          lis: "Nodejs ",
        },
        li4: {
          lip: "FRAMEWORKS:",
          lis: "Express",
        },
      },
    },
    S3: {
      title2: "WORK EXPERIENCE:",
      lp: {
        li1: {
          lip: "COMPANY: UNILEVER - R&D (RESEARCH AND DEVELOPMENT):",
          lis: "PACKAGING ENGINEER - TECHNICAL PROJECT LEADER | MAY 2021 - PRESENT",
        },
        li2: {
          lip: "COMPANY: UNILEVER - RESEARCH AND DEVELOPMENT INTERN:",
          lis: "RESEARCH AND DEVELOPMENT - SKIN CARE | SEPTEMBER 2019 - MAY 2021",
        },
      },
    },
  },
};
const ContenidoContact2 = {
  imagenProfile: profile,
  title: "👋🏽 Hi, I'm Francisco",
  sections: {
    s1: {
      title2: "Contact me:",
      lp: {
        li1: {
          lip: (
            <a href="mailto:arriaga.francisco@outlook.com">
              <i className="mt-3 fa-2x fa-solid fa-envelope"> 👈🏽 </i> Email
            </a>
          ),
          lis: "arriaga.francisco@outlook.com",
        },
        li2: {
          lip: (
            <a href="https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/">
              <i className="mt-3 fa-2x fa-brands fa-linkedin"> 👈🏽 </i> Linkedin
            </a>
          ),
          lis: "https://www.linkedin.com/in/francisco-arriaga-velasco-7a74611b5/",
        },
        li3: {
          lip: (
            <a href="https://wa.me/qr/RU3P4HAMEZVCC1">
              <i className="mt-3 fa-2x fa-brands fa-whatsapp"> 👈🏽 </i> Whatsapp
            </a>
          ),
          lis: "https://wa.me/qr/RU3P4HAMEZVCC1",
        },
        li4: {
          lip: (
            <h6>
              <i className="mt-3 fa-2x fa-solid fa-mobile-screen-button"></i>
              {"   "}
              7775142307
            </h6>
          ),
        },
      },
    },
  },
};

export { ContenidoAbout2, ContenidoContact2 };
