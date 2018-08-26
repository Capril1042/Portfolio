import React, { Component } from 'react';

import Resume from '../Resume';


class ResumePage extends Component {
    render(){
        return(
            <div>
            <div>
            
                <div className="what"> Check out my Resume
                </div >
                    <Resume/>
                </div>
            </div>
        );
    }
}

export default ResumePage;