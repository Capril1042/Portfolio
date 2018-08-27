import React, { Component } from 'react';


const spaceRace = require('../../assets/spacerace.png');
const djorg = require('../../assets/Djorg.png');

class ProjectPage extends Component {
    render(){
        return(
            <section id="projects" className="projects">
               <div className="spacerace"> <a href="https://www.youtube.com/watch?v=AVXaQf3QB9E"> 
           <img className="workPiece"src={spaceRace}/>
           </a>
        </div>
        <div className="drorg"> <a href="https://github.com/Capril1042/djorg"> 
           <img className="workPiece"src={djorg}/>
           </a>
        </div> 
         
            </section>
        );
    }
}

export default ProjectPage;