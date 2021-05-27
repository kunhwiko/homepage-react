import React from 'react';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import '../style/homepage.css';

export default function Homepage() {
  return (
    <div id="home" className="split-container">
      <div className="split-container-left">
        <h1 className="author-text">Kun Hwi Ko</h1>
        <nav>
          <ul>
            <li><a className="title-text" href="/home">ABOUT</a></li>
            <li><h2 className="title-text">/</h2></li>
            <li><a className="title-text" href="/filteredListings">WORK</a></li>
            <li><h2 className="title-text">/</h2></li>
            <li><a className="title-text" href="/neighborhoods">PROJECTS</a></li>
            <li><h2 className="title-text">/</h2></li>
            <li><a className="title-text" href="/neighborhoods">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="split-container-right">
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{'backgroundImage': 'url(assets/images/lease1.jpg)'}}>
                <h1 className="slide-text1">Travel Safe</h1>
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
    </div>    
  );
} 