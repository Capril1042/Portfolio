import React, { Component } from 'react';
import  CardDisplay from '../CardDisplay';

let styled = {
    fontSize:"48px",
    color:"hotpink",
    }
    
class ProjectPage extends Component {
    render(){
        return(
            <section id="projects" className="projects">
                <div className="projectpage">
                    <CardDisplay/>
                    <div className="icondown">
                        <a href="#resume">
                            <i className="fa fa-angle-double-down downiconB" style={styled}>
                            </i>
                        </a>
                        </div>
                </div>
            </section>
        );
    }
}

export default ProjectPage;