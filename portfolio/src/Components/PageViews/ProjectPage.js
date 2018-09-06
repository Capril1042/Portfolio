import React, { Component } from 'react';
import  CardDisplay from '../CardDisplay';


class ProjectPage extends Component {
    render(){
        return(
            <section id="projects" className="projects">
                <CardDisplay/>
            </section>
        );
    }
}

export default ProjectPage;