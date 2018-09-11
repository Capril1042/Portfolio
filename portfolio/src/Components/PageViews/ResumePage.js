import React, { Component } from 'react';
import Resume from '../Resume';
import '../main.css'

let styled = {
    fontSize:"48px",
    color:"hotpink",
    }

class ResumePage extends Component {
    render(){
        return(
           <section id="resume" className="resume">
                <div className="resumePDF">
                    <iframe  src="https://drive.google.com/file/d/1cT2W_ep6x5hHHTnr5t8OZcJovgAgfatD/preview" width="640" height="480">"></iframe>
                    <div className="icondown">
                        <a href="#contact">
                            <i className="fa fa-angle-double-down downiconB" style={styled}>
                            </i>
                        </a>
                        </div>
                </div>
            </section>
        );
    }
}

export default ResumePage;