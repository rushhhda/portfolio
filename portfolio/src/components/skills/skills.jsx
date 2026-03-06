import React from "react";
import "./skills.css";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";
import reactLogo from "../../assets/react.png";
import githubLogo from "../../assets/github.webp";

const Skills = () => {
  return (
    <>
      <div className="skills-sec" id="skills">
        <h1>SKILLS</h1>
        <div className="skill">
          <div className="logo">
            <img src={htmlLogo} alt="HTML" />
          </div>
          <div className="logo">
            <img src={cssLogo} alt="CSS" />
          </div>
          <div className="logo">
            <img src={jsLogo} alt="JavaScript" />
          </div>
          <div className="logo">
            <img src={reactLogo} alt="React" />
          </div>
          <div className="logo">
            <img src={githubLogo} alt="GitHub" />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Skills;
