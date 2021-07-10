import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/contact.css';
import resume from '../assets/images/resume.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';

export default function About() {
  return (
    <div id="contact" className="split-container">
      <div className="split-container-left-contact">
        <TextAnimation>
          <h1 className="author-text-contact">Contact</h1>
        </TextAnimation>
        <nav>
          <ul>
            <li><a className="nav-text-contact" href="/home">HOME</a></li>
            <li><h2 className="nav-text-contact">/</h2></li>
            <li><a className="nav-text-contact" href="/about">ABOUT</a></li>
            <li><h2 className="nav-text-contact">/</h2></li>
            <li><a className="nav-text-contact" href="/work">WORK</a></li>
            <li><h2 className="nav-text-contact">/</h2></li>
            <li><a className="nav-text-contact" href="/project">PROJECTS</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right-contact">
        <h3 className="h3-contact-text">Here are additional links that show more about me!</h3>
        <div className="profile">
          <div>
            <a href="resume/Kun Hwi Ko_Resume.pdf"><img className="resume" src={resume} width={80} height={80}/></a>
          </div>
        </div>
        <div className="profile">
          <div>
            <a href="https://www.linkedin.com/in/kunhwiko"><img className="linkedin" src={linkedin} width={80} height={80}/></a>
          </div>
        </div>
        <div className="profile">
          <div>
            <a href="https://www.github.com/kunhwiko"><img className="github" src={github} width={80} height={80}/></a>
          </div>
        </div>
      </div>
    </div>    
  );
} 