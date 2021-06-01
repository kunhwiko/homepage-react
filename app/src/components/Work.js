import React from 'react';
import TextAnimation from "react-animate-text";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../style/work.css';
import { ReactComponent as Company } from '../assets/images/company.svg';
import { ReactComponent as School } from '../assets/images/school.svg';

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
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-school"
            date="2011 - present"
            dateClassName="timeline-date-text"
            iconStyle={{ background: 'rgb(233, 30, 99)' , color: '#fff' }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
              Creative Direction, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          />
        </VerticalTimeline>
      </div>
    </div>    
  );
} 