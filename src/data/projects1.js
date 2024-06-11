import weatherApp from "../assets/img/weather-app.png";
import property from "../assets/img/property-pulse.png";
import portfolio from "..//assets/img/personal-portfolio.png";
const projects = [
  {
    title: "Property Rental",
    description: `
      A property rental website designed to enable users to browse, search, and manage property listings. It leverages a range of modern web development technologies and features to offer a comprehensive and user-friendly experience.
    `,
    implementation:
      "Teck stack: Next.js 14, React, Tailwind CSS, MongoDB, Mongoose, Next Auth, Photoswipe, Cloudinary, Mapbox, React Map GL, React Geocode, React Spinners, React Icons, React Toastify, React Share",
    imgUrl: property,
    projectLink: "https://property-rental-six.vercel.app/",
  },
  {
    title: "My Personal Portfolio Website",
    description:
      "A comprehensive personal portfolio website to showcase my projects & skills. The website is designed to be responsive and visually appealing, providing an optimal viewing experience across a wide range of devices.",
    implementation:
      "Technologies used: JavaScript, Bootstrap, Font Awesome, Animate.css, HTML5, CSS",
    imgUrl: portfolio,
    projectLink: "https://personal-portfolio-flame-tau.vercel.app/",
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
