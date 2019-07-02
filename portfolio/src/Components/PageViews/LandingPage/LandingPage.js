import React, { Component } from "react";
import "../../main.css";
import "./landingpage.css"

let styled = {
  fontSize: "48px",
  color: "hotpink"
};

class LandingPage extends Component {
  render() {
    return (
      <section id="home" className="landing">
        <div className="intro">
          <div className="name fadeInDown">Capri Lewis</div>
          <p className="title">Software Developer.</p>
          <a href="#about">
            <i className="fa fa-angle-double-down downicon" style={styled} />
          </a>
        </div>
      </section>
    );
  }
}

export default LandingPage;
