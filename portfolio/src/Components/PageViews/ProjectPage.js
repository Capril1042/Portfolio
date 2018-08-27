import React, { Component } from 'react';

import Slides from '../Slides';


class ProjectPage extends Component {
    render(){
        return(
            <section id="projects" className="projects">
               <div className="slides"> <Slides/>
               </div>
            </section>
        );
    }
}

export default ProjectPage;