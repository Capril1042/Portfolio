const spaceRace = require("../../../../assets/spacerace.png");
const djorg = require("../../../../assets/Djorg.png");
const recipe = require("../../../../assets/recipe.png");
const calcalc = require("../../../../assets/calcalc.png");
const crypt = require("../../../../assets/crypt.png")

const cardData = [
  {
    projectName: "Space Race",
    projectImage: `${spaceRace}`,
    projectURL: "https://www.youtube.com/watch?v=AVXaQf3QB9E",
    projectStack: ["Django", "React"],

    projectBlurb: "Users quiz their students."
  },

  {
    projectName: "Djorg-Fit",
    projectImage: `${djorg}`,
    projectURL: "https://github.com/Capril1042/djorg",
    projectStack: ["Django", "HTML"],
    projectBlurb: "Users track their fitness journey"
  },

  {
    projectName: "Recipe Tracker",
    projectImage: `${recipe}`,
    projectURL: "https://quiet-sea-76781.herokuapp.com",
    projectStack: ["React", "Node.js"],
    projectBlurb: "Users to Add and Store Recipes"
  },

  {
    projectName: "Calorie Calculator",
    projectImage: `${calcalc}`,
    projectURL: "https://calcalc.netlify.com/",
    projectStack: ["React"],
    projectBlurb: "Daily Caloric Intake Calculator"
  },
  {
    projectName: "Cryptograms",
    projectImage: `${crypt}`,
    projectURL: "https://cryptogrampuzzles.netlify.com/",
    projectStack: ["React"],
    projectBlurb: "Cryptogram Puzzle Game"
  }
];

export default cardData;
