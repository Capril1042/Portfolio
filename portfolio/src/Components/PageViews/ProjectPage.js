import React, { Component } from 'react';
import SideBar from '../SideBar';
import Slides from '../Slides';


class ProjectPage extends Component {
    render(){
        return(
            <div>
             <SideBar/>
            <Slides/>
            </div>
        );
    }
}

export default ProjectPage;