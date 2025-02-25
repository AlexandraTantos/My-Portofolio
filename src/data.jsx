import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaSass, FaDatabase } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
//Images for projects
import backroads from "./components/images/backroads.png";
import colorGenerator from "./components/images/color-generator.png";
import Tours from "./components/images/tours.jpg";
import unsplash from "./components/images/unsplash.png";
import menu from "./components/images/menu.png";
//import comfy from "./components/images/comfy.png";
import natours from "./components/images/natours.png";
import color from "./components/images/color.png";
import simon from "./components/images/simon.png";
import monster from "./components/images/monster.png";
import rockpaperscissors from "./components/images/rock.png";
//import grocery from "./components/images/Grocery.png";
//import mixmaster from "./components/images/mixmaster.png";
import reactstore from "./components/images/reactstore.png";
import dataStructures from "./components/images/data-structures.png";
//import githubusers from "./components/images/githubusers.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML & CSS, creating responsive and visually appealing websites for a great user experience.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in JavaScript, building dynamic and interactive web applications with smooth functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in React, developing fast and efficient front-end applications using a component-based approach.",
  },
  {
    id: nanoid(),
    title: "Sass",
    icon: <FaSass className="h-16 w-16 text-emerald-500" />,
    text: "Using Sass to write clean and organized styles, improving project design and maintainability.",
  },
  {
    id: nanoid(),
    title: ".NET",
    icon: <SiDotnet className="h-16 w-16 text-emerald-500" />, // Replace with an appropriate .NET icon if needed
    text: "Experienced in .NET, developing scalable and secure back-end solutions for web applications and APIs.",
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in SQL, designing efficient databases that ensure data integrity and quick retrieval.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: dataStructures,
    url: "https://datastructures01.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Linked Lists, Stack and Queue",
    text: "As a web developer, understanding data structures is crucial. The main methods of these data structures are displayed on this web page using HTML,CSS and JS. ",
  },
  {
    id: nanoid(),
    img: reactstore,
    url: "https://comfystore123.netlify.app",
    github: "https://github.com/alexandratantos",
    title: "Comfy Store App",
    text: "This website is designed with both functionality and aesthetics in mind, utilizing the power of Tailwind CSS and React to create a seamless and visually stunning shopping experience.",
  },
  {
    id: nanoid(),
    img: unsplash,
    url: "https://unsplashapi9.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Unsplash App",
    text: "Dive into a visual feast on our React-driven images website, seamlessly powered by the Unsplash API. Immerse yourself in a curated collection of breathtaking photos.",
  },
  {
    id: nanoid(),
    img: menu,
    url: "https://menuitems2.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Menu App",
    text: "Experience a delightful culinary journey on this JavaScript-based menu website. Crafted for simplicity and elegance, explore a diverse array of dishes thoughtfully organized.",
  },
  {
    id: nanoid(),
    img: backroads,
    url: "https://backroads31.netlify.app/#home",
    github: "https://github.com/alexandratantos",
    title: "Backroads Tours",
    text: "Embark on unforgettable journeys with our React-powered tour website. Immerse yourself in seamless navigation, rich visuals, and personalized experiences.",
  },
  {
    id: nanoid(),
    img: color,
    url: "https://pastelcolor-flipper.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Color Flipper",
    text: "Indulge in a spectrum of colors with our JavaScript-powered color flipper website. Witness a dynamic display of vibrant hues in a stylish CSS layout.",
  },
  /*
  {
    id: nanoid(),
    img: mixmaster,
    url: "https://mixmaster-react-app9.netlify.app",
    github: "https://github.com/alexandratantos",
    title: "MixMaster",
    text: "MixMaster React app, fueled by the CocktailDB API and React Query, provides instant access to an array of cocktail recipes. Cheers to effortless cocktail discovery with MixMaster!",
  },*/
  {
    id: nanoid(),
    img: colorGenerator,
    url: "https://reactcolorgenerator2.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Color Generator ",
    text: "Explore a world of possibilities with our color generator app powered by React and the values.js library. Effortlessly discover stunning color palettes with just a click. ",
  },
  {
    id: nanoid(),
    img: Tours,
    url: "https://toursreactapp23.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Tours ",
    text: "Discover the world's wonders, as our intuitive interface guides you through captivating destinations and extraordinary adventures.",
  },
  {
    id: nanoid(),
    img: natours,
    url: "https://naturetourapp1.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Natours ",
    text: "Discover the beauty of nature with our Sass-styled nature tours website. Immerse yourself in breathtaking landscapes and eco-friendly adventures.",
  },
  /*{
    id: nanoid(),
    img: grocery,
    url: "https://groceriesmanager.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Grocery Buddy",
    text: "Seamlessly organize, plan, and streamline your grocery lists with an intuitive interface. Elevate your shopping routine and enjoy a stress-free way to stay organized.",
  },*/
];
export const games = [
  {
    id: nanoid(),
    img: simon,
    url: "https://simon-game-app0.netlify.app",
    github: "https://github.com/alexandratantos",
    title: "Simon Says",
    text: "Dive into the classic fun of Simon Says with our online game website, expertly designed for an engaging experience. Enjoy the nostalgia with a responsive interface, making an interesting challenge. ",
  },
  {
    id: nanoid(),
    img: monster,
    url: "https://monster-killer-game.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Monster Attack",
    text: "Embark on an epic adventure with our Monster Attack Game website. Immerse yourself in thrilling battles and heart-pounding action, enhanced by an engaging and visually dynamic design.",
  },
  {
    id: nanoid(),
    img: rockpaperscissors,
    url: "https://rock-paper-s-game.netlify.app/",
    github: "https://github.com/alexandratantos",
    title: "Rock Paper Scissors",
    text: "Engage in the timeless fun of Rock, Paper, Scissors with our online game website. Experience the classic hand-game excitement through an intuitive and visually appealing design.",
  },
];
