import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/contact.css';

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

      </div>
    </div>    
  );
} 