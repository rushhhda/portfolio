import React from "react";
import "./projects.css";
import Section from "./section";

const Projects = ({ projects }) => {
  return (
    <div className="project-sec" id="projects">
      <h1>Projects</h1>

      <div className="projects">
        {projects.map((elem, index) => (
          <Section
            key={index}
            img={elem.img}
            pName={elem.pName}
            desc={elem.desc}
            gitHub={elem.gitHub}
            live={elem.live}
          />
        ))}
      </div>

      <div className="line"></div>
    </div>
  );
};

export default Projects;
