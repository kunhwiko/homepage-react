import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/project.css';
import Movie from '../assets/images/movie.jpg';

export default function Project() {
  return (
    <div id="project" className="split-container">
      <div className="split-container-left-project">
        <TextAnimation>
          <h1 className="author-text-project">Kun Hwi Ko</h1>
        </TextAnimation>
        <nav>
          <ul>
          <li><a className="nav-text-project" href="/home">HOME</a></li>
            <li><h2 className="nav-text-project">/</h2></li>
            <li><a className="nav-text-project" href="/about">ABOUT</a></li>
            <li><h2 className="nav-text-project">/</h2></li>
            <li><a className="nav-text-project" href="/work">WORK</a></li>
            <li><h2 className="nav-text-project">/</h2></li>
            <li><a className="nav-text-project" href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right-project">
        <div class="mini-row-container" style={{backgroundImage: "url(" + Movie + ")"}}>
          <div class="overlay fade1">
            <h2 class="overlay-text">Crimebnb</h2>
            <h3 class="overlay-text2">React.js, Node.js, MySQL</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/crimebnb">>></a>
            <h4 class="overlay-text3">Anytime you're stuck on what movie you want to watch, use this recommendation system powered by machine learning.</h4>
          </div>
        </div>
      </div>
    </div>    
  );
} 