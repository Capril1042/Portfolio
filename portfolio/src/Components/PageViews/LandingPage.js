import React, { Component } from 'react';
import SideBar from '../SideBar'
import Landing from '../Landing'
import '../main.css'

class LandingPage extends Component {
    render(){
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <SideBar/>
                </div>
                <div className="title">
                    <Landing/>
                </div>
            </div>
        );
    }
}

export default LandingPage;