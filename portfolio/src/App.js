import React, { Component } from 'react';


import AboutMePage from './Components/PageViews/AboutMePage'
// import BlogPage from './Components/PageViews/BlogPage'
import ContactPage from './Components/PageViews/ContactPage'
import LandingPage from './Components/PageViews/LandingPage'
import ProjectPage from './Components/PageViews/ProjectPage'
import ResumePage from './Components/PageViews/ResumePage'
import Navigation from './Components//Navigation'

class App extends Component {
  render() {
    return (
    <div>
    <Navigation/>
    <LandingPage />
    <AboutMePage />
    <ProjectPage />
    {/* <BlogPage/> */}
    <ResumePage/>
    <ContactPage />
   
  </div>
    );
  }
}

export default App;
