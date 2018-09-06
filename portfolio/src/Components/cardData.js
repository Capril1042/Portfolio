const spaceRace = require('../assets/spacerace.png');
const djorg = require('../assets/Djorg.png');

const cardData = [
    {
    projectName:"Space Race",
    projectImage: `${spaceRace}` ,
    projectURL: "https://www.youtube.com/watch?v=AVXaQf3QB9E",
    projectStack: [
        
            "Python", 
            "Django", 
            "JavaScript",
            "React"
        
        ] ,

    projectBlurb: " Capstone Project for Lambda School",
    
    },

   {
    projectName:  "Djorg-Fit",
    projectImage: `${djorg}` ,
    projectURL: "https://github.com/Capril1042/djorg",
    projectStack: [
        "Python",
        "Django",
        "HTML",
        "Bootstrap"
        ],
    projectBlurb: "Organization tool to track fitnessjourney"
    
    },

    {
    projectName: "Coming Soon",
    projectImage: "COmingSoon",
    projectURL: "COming soon",
    projectStack: [
        "coming soon",
        
    ],
    projectBlurb: "coming soon",
    
    },
    

];

export default cardData;