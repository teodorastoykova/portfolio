import learningSysImg from "../assets/img/e-learning-system.png";
import simonGame from "../assets/img/simon-game.png";
import filmify from "../assets/img/filmify.png";
const projects = [
  {
    title: "Filmify: Your Ultimate Movie Companion",
    description:
      "Filmify is a sleek and intuitive movie application designed to enhance your cinematic experience. With Filmify, you can discover, explore, and keep track of your favorite movies effortlessly.",
    implementation:
      "Implemented With: React.js, Material-UI templates, the Movie Database (TMDb) API, Cypress, Vitest",
    imgUrl: filmify,
    projectLink: "",
  },
  {
    title: "E-Learning System",
    description:
      "This e-learning platform offers a user-friendly interface for students to effortlessly explore and enroll in courses, while empowering teachers to efficiently create and manage their course content. Administrators oversee the platform's overall operation, ensuring quality control and smooth functioning.",
    implementation:
      "Tech Stack: Fast API, HTTP , SQL, MariaDB, MySQL Workbench, Postman, Git, GitLab, React, HTML, CSS, MUI templates",
    imgUrl: learningSysImg,
    projectLink: "",
  },

  {
    title: "The Simon Game: Test Your Memory and Reflexes",
    description:
      "The Simon Game is a classic memory and reflex game that challenges players to recall and repeat sequences of colors and sounds. With its simple yet addictive gameplay, Simon provides hours of entertainment for players of all ages.",
    implementation: "",
    imgUrl: simonGame,
    projectLink: "https://teodorastoykova.github.io/simon-game/",
  },
];

export default projects;
