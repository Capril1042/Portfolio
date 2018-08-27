import React, { Component } from 'react';

import Slides from '../Slides';


class ProjectPage extends Component {
    render(){
        return(
            <div id="projects">
         
             <div className="what">
                    A few Projects I've worked on...
                
            <Slides/>
            </div>
            </div>
        );
    }
}

export default ProjectPage;