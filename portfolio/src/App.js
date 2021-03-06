import React, { Component } from "react";
import "./App.css";

import AboutMePage from "./Components/PageViews/AboutMe/AboutMePage";
// import BlogPage from './Components/PageViews/BlogPage'
import ContactPage from "./Components/PageViews/Contact/ContactPage";
import LandingPage from "./Components/PageViews/LandingPage/LandingPage";
import ProjectPage from "./Components/PageViews/Projects/ProjectPage";
import ResumePage from "./Components/PageViews/Resume/ResumePage";
import Navigation from "./Components/PageViews/Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <LandingPage />
        <AboutMePage />
        <ProjectPage />
        {/* <BlogPage/> */}
        <ResumePage />
        <ContactPage />
      </div>
    );
  }
}

export default App;
