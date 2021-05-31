import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/work.css';

export default function Work() {
  return (
    <div id="work" className="split-container">
      <div className="split-container-left-work">
        <TextAnimation>
          <h1 className="author-text-work">Kun Hwi Ko</h1>
        </TextAnimation>
        <nav>
          <ul>
            <li><a className="nav-text-work" href="/home">HOME</a></li>
            <li><h2 className="nav-text-work">/</h2></li>
            <li><a className="nav-text-work" href="/about">ABOUT</a></li>
            <li><h2 className="nav-text-work">/</h2></li>
            <li><a className="nav-text-work" href="/projects">PROJECTS</a></li>
            <li><h2 className="nav-text-work">/</h2></li>
            <li><a className="nav-text-work" href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right-work">
      </div>
    </div>    
  );
} 