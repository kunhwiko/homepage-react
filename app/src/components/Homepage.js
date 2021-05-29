import React from 'react';
import { Slide } from "react-slideshow-image";
import TextAnimation from "react-animate-text";
import 'react-slideshow-image/dist/styles.css';
import '../style/homepage.css';
import avatar from '../assets/images/avatar.jpeg';

export default function Homepage() {
  return (
    <div id="home" className="split-container">
      <div className="split-container-left-home">
        <img alt="avatar" className="avatar" src={avatar} />
        <TextAnimation>
          <h1 className="author-text-home">Kun Hwi Ko</h1>
        </TextAnimation>
        <nav>
          <ul>
            <li><a className="nav-text-home" href="/about">ABOUT</a></li>
            <li><h2 className="nav-text-home">/</h2></li>
            <li><a className="nav-text-home" href="/work">WORK</a></li>
            <li><h2 className="nav-text-home">/</h2></li>
            <li><a className="nav-text-home" href="/projects">PROJECTS</a></li>
            <li><h2 className="nav-text-home">/</h2></li>
            <li><a className="nav-text-home" href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right-home">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/home1.jpg)'}}>
            <h3 className="slide-text1">Software Engineer in Silicon Valley</h3>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/home2.jpg)'}}>
              <h1 className="slide-text2">Cloud Infrastructure Team</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/home3.jpg)'}}>
              <h1 className="slide-text3">Stock Investor</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': 'url(assets/images/home4.jpg)'}}>
              <h1 className="slide-text4">Cycling Enthusiast</h1>
            </div>
          </div>
        </Slide>
      </div>
    </div>    
  );
} 