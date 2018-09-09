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
                    <iframe  src="https://drive.google.com/file/d/1ULj8a-CnqY9qHD-j6wNPsliVtTvesrWq/preview"></iframe>
                        <a href="#contact">
                            <i className="fa fa-angle-double-down downiconB" style={styled}>
                            </i>
                        </a>
                </div>
            </section>
        );
    }
}

export default ResumePage;