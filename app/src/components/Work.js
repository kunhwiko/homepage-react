import React from 'react';
import TextAnimation from "react-animate-text";
import '../style/work.css';
import barclays from '../assets/images/barclays.jpg';
import penn from '../assets/images/penn.png';
import fifth from '../assets/images/fifth.jpeg';

export default function Work() {
  return (
    <div id="work" className="split-container">

      <div className="split-container-left-work">
        <div class="timeline">
          <div class="entry">
            <div class="title">
              <img alt="barclays" className="barclays" src={barclays} />
              <h3>Moloco</h3>
            </div>
            <div class="body">
              <p><b>Software Engineer</b></p>
              <ul>
                <li>Jun 2021-Present</li>
              </ul>
              <h4>I will initially be working on developing microservice APIs and ensuring scalability and failure handling on our distributed server. Very excited for this opportunity!</h4>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <img alt="penn" className="penn" src={penn} />
              <h3>University</h3>
              <h3>of</h3>
              <h3>Pennsylvania</h3>
            </div>
            <div class="body">
              <p><b>Teaching Assistant</b></p>
              <ul>
                <li>Jan 2021-May 2021</li>
              </ul>
              <h4>TA for CIT 596 : Algorithms & Computation</h4>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <img alt="barclays" className="barclays" src={barclays} />
              <h3>Barclays</h3>
            </div>
            <div class="body">
              <p><b>Summer Developer</b></p>
              <ul>
                <li>Jun 2020-Jul 2020</li>
              </ul>
              <h4>I collaborated on a Java web app that looks for violations in equity transactions. I did unit testing by querying for existing and custom made data from our SQL database.</h4>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <img alt="fifth" className="fifth" src={fifth} />
              <h3>Republic of</h3>
              <h3>Korea Army</h3>
            </div>
            <div class="body">
              <p><b>Financial Specialist</b></p>
              <ul>
                <li>Jun 2017-Mar 2019</li>
              </ul>
              <h4>I mainly worked on doing risk analysis for large internal investments and helping to connect the Bank of Korea with different contractors.</h4>
            </div>
          </div>        
        </div>
      </div>
      <div className="split-container-right-work">
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
    </div>    
  );
} 