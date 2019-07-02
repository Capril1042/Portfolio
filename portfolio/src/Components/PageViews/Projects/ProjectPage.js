import React, { Component } from "react";
import "./projects.css";
import CardDisplay from "./Cards/CardDisplay";

let styled = {
  fontSize: "48px",
  color: "hotpink",
  width: "100%"
};

class ProjectPage extends Component {
  render() {
    return (
      <section id="projects" className="projects">
        <div className="projectpage">
          <CardDisplay />
          <div className="icondown">
            <a href="#resume">
              <i className="fa fa-angle-double-down downiconB" style={styled} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectPage;
