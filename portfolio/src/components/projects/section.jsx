import React from "react";
import "./projects.css";
const Section = (props) => {
  return (
    <div className="projects">
      <div className="box" id="game">
        <img src={props.img}></img>
        <h3>{props.pName}</h3>
        <p>{props.desc}</p>
        <div className="btn">
          <a href={props.live}>
            Live Demo
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/tv.png"
              alt="tv"
            />
          </a>
          <a href={props.gitHub}>
            GitHub
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/lollipop/48/forward-arrow.png"
              alt="forward-arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
