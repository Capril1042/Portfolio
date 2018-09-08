import React, { Component } from 'react';

import Resume from '../Resume';

import '../main.css'

class ResumePage extends Component {
    render(){
        return(
           <section id="resume" className="resume">
                <div className="resumePDF">
                    <iframe  src="https://drive.google.com/file/d/1ULj8a-CnqY9qHD-j6wNPsliVtTvesrWq/preview"></iframe>
                </div>
            </section>
        );
    }
}

export default ResumePage;