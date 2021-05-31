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
        <h3 class="h3-about-text"><b>Software Engineer based in Silicon Valley</b></h3>
        <h4 class="h4-about-text">I am starting a new journey at C3.ai on their cloud infrastructure team. My work will contribute to building a scalable platform that supports applications for energy management, early disease detection, and predictive maintenance.</h4>
        <h4 class="h4-about-text">Outside of work, I like to spend time dabbing into web and mobile development as a hobby. My most recent project is Crimebnb, a React.js app that allows users to view crime incidents near Airbnb listings in New York City.  </h4>
        <br></br>
        <h3 class="h3-about-text"><b>Transitioning from Finance to Tech</b></h3>
        <h4 class="h4-about-text">I started programming wanting to work in quant trading. Along the way, I became fascinated with distributed systems and cloud computing, and took a detour that brought me into back-end engineering.   </h4>
        <h4 class="h4-about-text">I am fortunate enough to have found something I truly enjoy doing and am proud to be an engineer. I am also fortunate to have met extraordinary people during my journey. Don't ever let change get the best of you.</h4>
        <br></br>
        <h3 class="h3-about-text"><b>Investing in Stocks and Cycling</b></h3>
        <h4 class="h4-about-text">I like to research and learn about different markets, businesses, and stocks when I have time. Currently, I am keeping an open eye out on the EV market and cryptocurrency.</h4>
        <h4 class="h4-about-text">As a short breather, I enjoy going for a ride on my bike. Usually, I don't have a particular destination in mind, I just go wherever the wind takes me.</h4>
      </div>
    </div>    
  );
} 