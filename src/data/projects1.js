import weatherApp from "../assets/img/weather-app.png";
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
    title: "WeatherNow",
    description:
      "WeatherNow is a user-friendly weather application that provides real-time weather updates for cities around the globe. With WeatherNow, you can effortlessly search for your desired city and get detailed weather information instantly.",
    implementation: "Developed With: React.js, CSS, Open Weather API",
    imgUrl: weatherApp,
    projectLink: "https://teodorastoykova.github.io/weather-app/",
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
