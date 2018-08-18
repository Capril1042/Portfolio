import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AboutMePage from './Components/PageViews/AboutMePage'
import BlogPage from './Components/PageViews/BlogPage'
import ContactPage from './Components/PageViews/ContactPage'
import LandingPage from './Components/PageViews/LandingPage'
import ProjectPage from './Components/PageViews/ProjectPage'
import ResumePage from './Components/PageViews/ResumePage'


class App extends Component {
  render() {
    return (
    <div>
    <Route path="/" exact component={LandingPage} />
    <Route path="/About-CapriLewis" component={AboutMePage} />
    <Route path="/Blog-CapriLewis" component={BlogPage} />
    <Route path="/Contact-CapriLewis" component={ContactPage} />
    <Route path="/Projects-CapriLewis" component={ProjectPage} />
     <Route path="/Resume-CapriLewis" component={ResumePage} /> 
  </div>
    );
  }
}

export default App;
