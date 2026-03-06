import React from "react";
import "./navbar.css";
import resume from "../../assets/Resume.pdf";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={resume} className="resume">
          Resume
        </a>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Navbar;
