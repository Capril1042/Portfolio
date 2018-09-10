import React, { Component } from 'react';
import '../main.css'

let styled = {
    fontSize:"48px",
    color:"hotpink",
    }

const Pic = require('../../assets/profilepic.jpg');

class AboutMePage extends Component {
    render(){
        return(
            <section id="about" >
                <div className="about">
                    <img className="myPic" src={Pic} />
                        <p>Hi! I'm Capri. I am a Full Stack Software Developer based in Philadelphia, Pa. 
                        My interests include traveling, puzzles and anything fitness related.
                        My love of learning and challenges inspired me to 
                        become a Software Developer. </p>
                        {/* <p className="aboutme">Hi, my name is Capri. I am a Full Stack Software Delveoper, based out of Philadelphia, Pa.
                        I enjoy traveling, puzzles, all things fitness and solving problems. My love of learning and challenges, inpired me to become 
                        a Software Developer.  </p> */}
                        <a href="#projects">
                            <i className="fa fa-angle-double-down downiconB" style={styled}>
                            </i>
                        </a>
                </div>
            </section>
        );
    }
}

export default AboutMePage;