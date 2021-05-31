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
        <h4 class="h4-about-text">I am starting a new journey at Moloco Ads on their infrastructure team. My work will contribute to building scalable servers and APIs that empower mobile app businesses through our cloud and machine learning technologies.</h4>
        <h4 class="h4-about-text">Personally, I have a lot of interest in concurrency, scalability, failure handling, and API design. I also openly discuss systems design and various algorithms on GitHub. </h4>
        <br></br>
        <h3 class="h3-about-text"><b>Moving from Finance to Tech</b></h3>
        <h4 class="h4-about-text">I came into computer science wanting to work in quant finance. Along the way, I met extraordinary people, gained valuable experiences, and took a detour that brought me into software engineering.</h4>
        <h4 class="h4-about-text">I am fortunate enough to love what I do and am proud to be an engineer. Don't ever let change get the best of you and keep dreaming.</h4>
        <br></br>
        <h3 class="h3-about-text"><b>Investing in Stocks</b></h3>
        <h4 class="h4-about-text">I like to research and learn about stocks in my free time. Currently, I am keeping an open eye out on Big Tech and the EV market.</h4>
      </div>
    </div>    
  );
} 