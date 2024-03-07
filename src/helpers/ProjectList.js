import KeeperApp from "../assets/KeeperApp.png";
import WeatherApp from "../assets/WeatherApp.png";
import BakeMeACake from "../assets/BakeMeACake.png";
import NucampSite from "../assets/NucampSite.png";
import Calculator from "../assets/Calculator.png";

// Array containing details of different projects
export const ProjectList = [
  {
    name: "Keep App", //Title Of Project
    image: KeeperApp, // Importing the image for the Keeper App
    skills: "HTML, CSS, JavaScript, UI/UX", //List of skills
    link: "https://alberto-garcia1.github.io/keeper-app/", // Link to the Keeper App project
    type: "Learning", //Type of project, Business or Learning
  },
  {
    name: "Weather App",
    image: WeatherApp, 
    skills: "HTML, CSS, JavaScript, React, WeatherAPI",
    link: "https://alberto-garcia1.github.io/weather-app/", 
    type: "Learning",
  },
  {
    name: "Rosie Bake Me A Cake",
    image: BakeMeACake, 
    skills:
      "HTML, CSS, JavaScript, React, ReactStrap, Material UI, DNS from SquareSpace UI/UX",
    link: "www.rosiebakemeacake.com",
    type: "Business",
  },
  {
    name: "Nucamp Campsite",
    image: NucampSite,
    skills: "HTML, CSS, JavaScript, React, Redux, Json-Server",
    link: "https://alberto-garcia1.github.io/nucampsite/",
    type: "Learning",
  },
  {
    name: "Calculator",
    image: Calculator,
    skills: "HTML, CSS, JavaScript",
    link: "https://github.com/Alberto-garcia1/calculator",
    type: "Learning",
  },
];
