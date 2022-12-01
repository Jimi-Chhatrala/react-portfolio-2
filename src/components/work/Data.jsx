import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

// Front End Technologies

import HTML5 from "../../assets/icons/html5.svg";
import CSS3 from "../../assets/icons/css3.svg";
import JAVASCRIPT from "../../assets/icons/javascript.svg";
import JQUERY from "../../assets/icons/jquery.svg";
import TAILWINDCSS from "../../assets/icons/tailwindcss.svg";
import BOOTSTRAP from "../../assets/icons/bootstrap.svg";
import GIT from "../../assets/icons/git.svg";
import REACT from "../../assets/icons/react.svg";
import MATERIALUI from "../../assets/icons/materialui.svg";
import MATERIALIZECSS from "../../assets/icons/materializecss.svg";
import SASS from "../../assets/icons/sass.svg";

// Back End Technologies

import PHP from "../../assets/icons/php.svg";
import LARAVEL from "../../assets/icons/laravel.svg";
import MYSQL from "../../assets/icons/mysql.svg";
import NODEJS from "../../assets/icons/nodejs.svg";
import EXPRESSJS from "../../assets/icons/expressjs.svg";
import MONGODB from "../../assets/icons/mongodb.svg";
import JAVA from "../../assets/icons/java.svg";
import SPRINGBOOT from "../../assets/icons/springboot.svg";
import GITHUB from "../../assets/icons/github.svg";
import FIREBASE from "../../assets/icons/firebase.svg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Web Design",
    category: "web",
    description:
      "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.",
    // techstack: [HTML5, CSS3],
    // techstack: ["HTML", "CSS"],
    // techstack: ["HTML5", "CSS3", "JAVASCRIPT", "BOOTSTRAP"],
    techstack: [HTML5, CSS3, JAVASCRIPT, BOOTSTRAP, FIREBASE],
    // techstack: { 1: HTML5, 2: CSS3, 3: JAVASCRIPT, 4: BOOTSTRAP },
    demolink: "https://www.google.com/",
  },
  {
    id: 2,
    image: Work2,
    title: "App movil",
    category: "app",
    description:
      "A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
    techstack: [REACT, NODEJS, EXPRESSJS, MONGODB, GITHUB],
    demolink: "https://www.linkedin.com/",
  },
  {
    id: 3,
    image: Work3,
    title: "Brand Design",
    category: "design",
    description:
      "A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
    techstack: [LARAVEL, PHP, MYSQL, GIT],
    demolink: "https://www.facebook.com/",
  },
  {
    id: 4,
    image: Work4,
    title: "App movil",
    category: "app",
    description:
      "A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
    techstack: [JAVA, SPRINGBOOT, MYSQL, SASS],
    demolink: "https://www.youtube.com/",
  },
  {
    id: 5,
    image: Work5,
    title: "Web Design",
    category: "web",
    description:
      "A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
    techstack: [HTML5, CSS3, JAVASCRIPT, JQUERY],
    demolink: "https://www.react.org/",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
