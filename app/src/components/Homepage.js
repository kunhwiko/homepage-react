import React from 'react';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import '../style/homepage.css';
import avatar from '../assets/images/avatar.jpeg';

export default function Homepage() {
  return (
    <div id="home" className="split-container">
      <div className="split-container-left">
        <img alt="avatar" className="avatar" src={avatar} />
        <h1 className="author-text">Kun Hwi Ko</h1>
        <nav>
          <ul>
            <li><a className="nav-text" href="/home">ABOUT</a></li>
            <li><h2 className="nav-text">/</h2></li>
            <li><a className="nav-text" href="/filteredListings">WORK</a></li>
            <li><h2 className="nav-text">/</h2></li>
            <li><a className="nav-text" href="/neighborhoods">PROJECTS</a></li>
            <li><h2 className="nav-text">/</h2></li>
            <li><a className="nav-text" href="/neighborhoods">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/about1.jpg)'}}>
            <h3 className="slide-text1">Software Engineer in Silicon Valley</h3>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/lease2.jpg)'}}>
              <h1 className="slide-text2">Travel More</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/lease3.jpg)'}}>
              <h1 className="slide-text3">Travel Further</h1>
            </div>
          </div>
        </Slide>
      </div>
    </div>    
  );
} 