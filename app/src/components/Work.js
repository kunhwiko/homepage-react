import React from 'react';
import TextAnimation from "react-animate-text";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/work.css';
import { ReactComponent as Company } from '../assets/images/company.svg';
import { ReactComponent as School } from '../assets/images/school.svg';
import c3 from '../assets/images/c3.jpg';
import penn from '../assets/images/penn.png';
import barclays from '../assets/images/barclays.jpg';
import fifth from '../assets/images/fifth.jpeg';
import nyu from '../assets/images/nyu.jpg';

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
        <h1 className="timeline-header">Work & Education Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element-company"
            date="July 2021 - Present"
            dateClassName="timeline-date-text"
            iconStyle={{ background: '#10e7dc'  , color: '#fff' }}
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
            date="Graduation: May 2021"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<School />}
          >
            <div><img className="penn" src={penn}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">University of Pennsylvania</h2>
            <h4 className="vertical-timeline-element-subtitle">Master of Computer and Information Technology</h4>
            <p className="vertical-timeline-element-description">Attendance: Sep 2019 - May 2021</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-company"
            date="Jan 2021 - May 2021"
            dateClassName="timeline-date-text"
            iconStyle={{ background: '#10e7dc', color: '#fff' }}
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
            date="Jul 2020 - Aug 2020"
            dateClassName="timeline-date-text"
            iconStyle={{ background: '#10e7dc', color: '#fff' }}
            icon={<Company />}
          >
            <div><img className="barclays" src={barclays}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">Barclays</h2>
            <h4 className="vertical-timeline-element-subtitle">Summer Developer</h4>
            <p className="vertical-timeline-element-description">Market Surveillance Team</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-company"
            date="Jun 2017 - Mar 2019"
            dateClassName="timeline-date-text"
            iconStyle={{ background: '#10e7dc', color: '#fff' }}
            icon={<Company />}
          >
            <div><img className="fifth" src={fifth}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">Republic of Korea Army</h2>
            <h4 className="vertical-timeline-element-subtitle">Financial Specialist</h4>
            <p className="vertical-timeline-element-description">Risk and Disbursement Management</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-school"
            date="Graduation: Sep 2016"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<School />}
          >
            <div><img className="nyu" src={nyu}/></div>
            <br></br>
            <h2 className="vertical-timeline-element-title">NYU Stern School of Business</h2>
            <h4 className="vertical-timeline-element-subtitle">Master of Science in Accounting</h4>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Business</h4>
            <p className="vertical-timeline-element-description">Attendance: Aug 2012 - Sep 2016</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>    
  );
} 