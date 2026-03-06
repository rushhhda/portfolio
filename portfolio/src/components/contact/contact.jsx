import React from "react";
import "./contact.css";
import mail from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/github.png";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <div className="icon">
          <img src={mail}></img>
          <a href="mailto:rushdasajid0210@gmail.com">
            rushdasajid0210@gmail.com
          </a>
        </div>
        <div className="icon">
          <img src={linkedin}></img>
          <a href="https://www.linkedin.com/in/rushdasajid0210">
            www.linkedin.com/in/rushdasajid0210
          </a>
        </div>
        <div className="icon">
          <img src={git}></img>
          <a href="https://github.com/rushhhda">https://github.com/rushhhda</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
