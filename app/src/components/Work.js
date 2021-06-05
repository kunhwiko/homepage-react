import React from 'react';
import TextAnimation from "react-animate-text";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/work.css';
import { ReactComponent as Company } from '../assets/images/company.svg';
import { ReactComponent as School } from '../assets/images/school.svg';
import c3 from '../assets/images/c3.jpg';
import penn from '../assets/images/penn.png';

export default function Work() {
  return (
    <div id="work" className="split-container">
      <div className="split-container-top-work">
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
      <div className="split-container-bottom-work">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element-company"
            date="July 2021 - Present"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(207, 255, 229)' , color: '#fff' }}
            icon={<Company />}
          >
            <div><img className="c3" src={c3}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">C3.ai</h2>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer - Platform</h4>
            <p className="vertical-timeline-element-description">Cloud Infrastructure Team</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-school"
            date="May 2021"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(233, 30, 99)' , color: '#fff' }}
            icon={<School />}
          >
            <div><img className="penn" src={penn}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">University of Pennsylvania</h2>
            <h4 className="vertical-timeline-element-subtitle">Master of Computer and Information Technology</h4>
            <p className="vertical-timeline-element-description">Sep 2019 - May 2021</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-company"
            date="Jan 2021 - May 2021"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(207, 255, 229)' , color: '#fff' }}
            icon={<Company />}
          >
            <div><img className="penn" src={penn}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">University of Pennsylvania</h2>
            <h4 className="vertical-timeline-element-subtitle">Teaching Assistant</h4>
            <p className="vertical-timeline-element-description">CIT 596: Algorithms & Computation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-company"
            date="Jan 2021 - May 2021"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(207, 255, 229)' , color: '#fff' }}
            icon={<Company />}
          >
            <div><img className="penn" src={penn}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">University of Pennsylvania</h2>
            <h4 className="vertical-timeline-element-subtitle">Teaching Assistant</h4>
            <p className="vertical-timeline-element-description">CIT 596: Algorithms & Computation</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>    
  );
} 