const spaceRace = require("../../../../assets/spacerace.png");
const djorg = require("../../../../assets/Djorg.png");
const recipe = require("../../../../assets/recipe.png");
const calcalc = require("../../../../assets/calcalc.png");

const cardData = [
  {
    projectName: "Space Race",
    projectImage: `${spaceRace}`,
    projectURL: "https://www.youtube.com/watch?v=AVXaQf3QB9E",
    projectStack: ["Python", "Django", "JavaScript", "React"],

    projectBlurb: " An educational tool allowing teachers to quiz students."
  },

  {
    projectName: "Djorg-Fit",
    projectImage: `${djorg}`,
    projectURL: "https://github.com/Capril1042/djorg",
    projectStack: ["Python", "Django", "HTML", "Bootstrap"],
    projectBlurb: "Organizational tool for users to track their fitness journey"
  },

  {
    projectName: "Recipe Tracker",
    projectImage: `${recipe}`,
    projectURL: "https://quiet-sea-76781.herokuapp.com",
    projectStack: ["React", "Node.js", "Mongo", "Express"],
    projectBlurb: "Allows users to Add and Store Recipes"
  },

  {
    projectName: "Calorie Calculator",
    projectImage: `${calcalc}`,
    projectURL: "https://calcalc.netlify.com/",
    projectStack: ["React"],
    projectBlurb: "Daily Caloric Intake Calculator"
  }
];

export default cardData;
