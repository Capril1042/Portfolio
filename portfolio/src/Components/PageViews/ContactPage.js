import React, { Component } from 'react';
import SideBar from '../SideBar'
import Contact from '../Contact'
import '../main.css'

class ContactPage extends Component {
    render(){
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <SideBar/>
                </div>
                <div className="contact">
                    <Contact/>
                </div>
            </div>
        );
    }
}

export default ContactPage;