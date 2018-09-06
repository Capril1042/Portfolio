import React, { Component } from 'react';
import '../main.css'

const Pic = require('../../assets/profilepic.jpg');

class AboutMePage extends Component {
    render(){
        return(
            <section id="about" className="about">
                  <img className="myPic" src={Pic} />
                <p>My love of learning and challenges, inspired me to 
                 become a Software Developer.</p>
            </section>
            );
    }
}

export default AboutMePage;