import React from "react";
import '@fortawesome/free-regular-svg-icons'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'; */
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { SiAngular, SiGit, SiJavascript, SiTypescript, SiWordpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import cristhus from '../assets/images/cristhus.png';
import sandie from '../assets/images/sandie.png'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - present"
            iconStyle={{ background: '#6495ed', color: 'rgb(39, 40, 34)', padding: '5px' }}
            icon={<img src={cristhus} alt="Custom Icon" style={{ width: '100%', height: '100%' }} />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Unichristus</h4>
            <p>
              Focused on both Back-end and Front-end development, I am responsible for designing and implementing new components and user interfaces for the company's system.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <SiTypescript size="1.5em" color="#3178C6" />
              <SiJavascript size="1.5em" color="#F7DF1E" />
              <SiAngular size="1.5em" color="#DD0031" />
              <FaJava size="1.5em" color="#007396" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#6495ed', color: 'rgb(39, 40, 34)' }}
             icon={<img src={sandie} alt="Custom Icon" style={{ width: '100%', height: '90%' }} />}
          >
            <h3 className="vertical-timeline-element-title">Freelancer Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sandiê</h4>
            <p>
             I am responsible for creating and providing technical support for the company's website. I work independently to develop, maintain, and improve the platform.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <SiWordpress size="1.5em" color="#21759B" />
              <SiGit size="1.5em" color="#F05032" />
              <SiTypescript size="1.5em" color="#3178C6" />
              <FaJava size="1.5em" color="#007396" />
            </div>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;