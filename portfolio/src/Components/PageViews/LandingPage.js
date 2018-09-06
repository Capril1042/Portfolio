import React, { Component } from 'react';
import '../main.css'


const Pic = require('../../assets/profilepic.jpg');

class LandingPage extends Component {
    render(){
        return(
            <section id="home"className="landing">
                <div class="intro">
                    <div class="name">
                        Capri Lewis
                    </div> <br></br>
                    <div class="title"> 
                        <span>
                            Software Developer
                        </span>
                    </div>
                </div>
                
                {/* <img className="myPic" src={Pic} /> */}
            </section>
 
        )
    }
    }

export default LandingPage;