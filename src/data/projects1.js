import weatherApp from "../assets/img/weather-app.png";
import filmify from "../assets/img/filmify.png";
import portfolio from "..//assets/img/personal-portfolio.png";
const projects = [
  {
    title: "Property Rental",
    description: `
      A property rental website designed to enable users to browse, search, and manage property listings. It leverages a range of modern web development technologies and features to offer a comprehensive and user-friendly experience.
    `,
    implementation:
      "Teck stack: Next.js 14, React, Tailwind CSS, MongoDB, Mongoose, Next Auth, Photoswipe, Cloudinary, Mapbox, React Map GL, React Geocode, React Spinners, React Icons, React Toastify, React Share",
    imgUrl: portfolio,
    projectLink: "https://property-rental-six.vercel.app/",
  },
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
];

export default projects;
