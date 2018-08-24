import React, { Component } from 'react';
import SideBar from '../SideBar';
import Slides from '../Slides';


class ProjectPage extends Component {
    render(){
        return(
            <div>
             <SideBar/>
             <div className="what">
                    A few Projects I've worked on...
                </div>
                <div className="slides">
            <Slides/>
            </div>
            </div>
        );
    }
}

export default ProjectPage;