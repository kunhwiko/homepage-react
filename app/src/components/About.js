import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/about.css';

export default function Homepage() {
  return (
    <div id="home" className="split-container">
      <div className="split-container-left-about">
        <TextAnimation>
          <h1 className="author-text-about">Kun Hwi Ko</h1>
        </TextAnimation>
        <nav>
          <ul>
            <li><a className="nav-text-about" href="/home">HOME</a></li>
            <li><h2 className="nav-text-about">/</h2></li>
            <li><a className="nav-text-about" href="/work">WORK</a></li>
            <li><h2 className="nav-text-about">/</h2></li>
            <li><a className="nav-text-about" href="/projects">PROJECTS</a></li>
            <li><h2 className="nav-text-about">/</h2></li>
            <li><a className="nav-text-about" href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right-about">

      </div>
    </div>    
  );
} 