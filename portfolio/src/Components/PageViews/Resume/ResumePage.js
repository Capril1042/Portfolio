import React, { Component } from "react";
import { Button } from "reactstrap";
import "./resume.css";

let styled = {
  fontSize: "48px",
  color: "hotpink"
};

class ResumePage extends Component {
  render() {
    return (
      <section id="resume" className="resume">
        <div className="resumePDF">
          <iframe
            src="https://drive.google.com/file/d/15B0pHusvZBST0IxYsnZStfqlALgDzzGn/preview"
            width="640"
            height="480"
          >  
          </iframe>
          <div className="mobile-resume">
            <Button>
            <a href="https://resume.creddle.io/resume/168a95faj2m">View Resume </a></Button>
          </div>
          <div className="icondown">
            <a href="#contact">
              <i className="fa fa-angle-double-down downiconB" style={styled} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default ResumePage;
