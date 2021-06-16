import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/project.css';
import House from '../assets/images/house.jpg';
import Music from '../assets/images/music.jpg';
import Homepage from '../assets/images/homepage.jpg';
import Movie from '../assets/images/movie.jpg';
import Note from '../assets/images/note.jpg';
import Tetris from '../assets/images/tetris.jpg';

export default function Project() {
  return (
    <div id="project" className="split-container">
      <div className="split-container-left-project">
        <TextAnimation>
          <h1 className="author-text-project">Personal Projects</h1>
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
        <div class="mini-row-container" style={{backgroundImage: "url(" + House + ")"}}>
          <div class="overlay fade1">
            <h2 class="overlay-text">Crimebnb</h2>
            <h3 class="overlay-text2">React.js, HTML5, CSS3, Node.js, MySQL</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/crimebnb">>></a>
            <h4 class="overlay-text3">Make your trip safer and smarter by viewing crime trends near Airbnb listings.</h4>
          </div>
        </div>
        <div class="mini-row-container" style={{backgroundImage: "url(" + Music + ")"}}>
          <div class="overlay fade2">
            <h2 class="overlay-text">Pennify</h2>
            <h3 class="overlay-text2">Python</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/pennify">>></a>
            <h4 class="overlay-text3">Stream your music collection to others with our custom designed protocol.</h4>
          </div>
        </div>
        <div class="mini-row-container" style={{backgroundImage: "url(" + Homepage + ")"}}>
          <div class="overlay fade3">
            <h2 class="overlay-text">Homepage</h2>
            <h3 class="overlay-text2">React.js, HTML5, CSS3</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/homepage-react">>></a>
            <h4 class="overlay-text3">This amazing homepage is made in React and open source.</h4>
          </div>
        </div>
        <div class="mini-row-container" style={{backgroundImage: "url(" + Movie + ")"}}>
          <div class="overlay fade4">
            <h2 class="overlay-text">Newvies</h2>
            <h3 class="overlay-text2">Python</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/newvies">>></a>
            <h4 class="overlay-text3">Find movies to watch tonight by finding preferences of similar users with our state of the art AI.</h4>
          </div>
        </div>
        <div class="mini-row-container" style={{backgroundImage: "url(" + Note + ")"}}>
          <div class="overlay fade5">
            <h2 class="overlay-text">Definitely Not Keep</h2>
            <h3 class="overlay-text2">React.js, HTML5, CSS3</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/keep">>></a>
            <h4 class="overlay-text3">Clone of Google Keep Notes.</h4>
          </div>
        </div>
        <div class="mini-row-container" style={{backgroundImage: "url(" + Tetris + ")"}}>
          <div class="overlay fade6">
            <h2 class="overlay-text">Swiftris</h2>
            <h3 class="overlay-text2">Swift</h3>
            <a class="overlay-button" href="https://www.github.com/kunhwiko/swiftris">>></a>
            <h4 class="overlay-text3">Bringing more of the Tetris love to iOS.</h4>
          </div>
        </div>
      </div>
    </div>    
  );
} 