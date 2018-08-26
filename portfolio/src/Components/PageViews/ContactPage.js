import React, { Component } from 'react';

import Contact from '../Contact'
import '../main.css'

class ContactPage extends Component {
    render(){
        return(
            <div className="wrapper">
                
                <div className="contact">
                    <Contact/>
                </div>
            </div>
        );
    }
}

export default ContactPage;