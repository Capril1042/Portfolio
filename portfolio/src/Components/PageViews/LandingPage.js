import React, { Component } from 'react';
import SideBar from '../SideBar'
import Landing from '../Landing'
import '../main.css'


const Pic = require('../../assets/profilepic.jpg');

class LandingPage extends Component {
    render(){
        return(
            <section id="home"className="landing">
                <h1 className="name"> Capri Lewis
                <p>Software Developer</p> </h1>
                <img src={Pic} />
            </section>
            
        )
    }
    }

export default LandingPage;