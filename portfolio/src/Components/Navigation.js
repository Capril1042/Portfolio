import React, { Component } from 'react';


class Navigation extends Component {
    render(){
        return(
 <div className="navbar">
 <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#projects">Projects</a>
  {/* <a href="#blog">Blog</a> */}
  <a href="#resume">Resume</a>
  <a href="#contact">Contact</a>
</div>
             
        );
    }
}

export default Navigation;