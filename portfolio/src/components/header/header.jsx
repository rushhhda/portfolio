import React from "react";
import "./header.css";
import icon from "../../assets/icon.jpg";
import resume from "../../assets/Resume.pdf";
const Header = () => {
  return (
    <>
      <div className="section">
        <div className="header">
          <h4>Hi! I am</h4>
          <h1>Rushda Sajid</h1>
          <h1 className="role">Frontend developer</h1>
          <p>
            I build responsive websites and web-applications.
            <br /> Seeking opportunities to gain real-world experience
          </p>
          <div className="button">
            <a href="#projects">View Projects</a>
            <a href={resume}>Download Resume</a>
          </div>
        </div>
        <img src={icon} alt="icon" />
      </div>
      <div className="line"></div>
    </>
  );
};

export default Header;
