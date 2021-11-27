import React, { Component } from "react";
// import Skill from "./portfolioComponents/Skill";
// import TypeWriter from "typewriter-effect";

export class MyFrame extends Component {
  render() {
    return (
      <div>
          <div id="homeScreen">
        <div className="bg_text" id="hd_text">
        <blockquote>
          <h1>Zaid Samamah</h1>
          <cite>
            <i className="fas fa-check"></i>Computer Engineer<br/>
            <i className="fas fa-check"></i>Full-Stack Developer<br/>
            <i className="fas fa-check"></i>Cyber Security Specialist
          </cite>
        </blockquote>
      </div>
      </div>

        {/* <Skill /> */}
      </div>
    );
  }
}

export default MyFrame;
