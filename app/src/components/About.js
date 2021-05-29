import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/about.css';

export default function About() {
  return (
    <div id="home" className="split-container">
      <div className="split-container-left">
        <TextAnimation>
          <h1 className="author-text">Kun Hwi Ko</h1>
        </TextAnimation>
        <nav>
          <ul>
            <li><a className="nav-text" href="/about">ABOUT</a></li>
            <li><h2 className="nav-text">/</h2></li>
            <li><a className="nav-text" href="/work">WORK</a></li>
            <li><h2 className="nav-text">/</h2></li>
            <li><a className="nav-text" href="/projects">PROJECTS</a></li>
            <li><h2 className="nav-text">/</h2></li>
            <li><a className="nav-text" href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right">


      </div>
    </div>    
  );
} 