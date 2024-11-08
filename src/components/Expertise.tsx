import React from "react";
import {
  SiTypescript, SiJavascript, SiCss3, SiSass, SiHtml5, SiReact,
  SiAngular, SiVuedotjs, SiNodedotjs, SiPython, SiPhp,
  SiR, SiC, SiGit, SiDocker, SiAmazon, SiPostgresql,
  SiIntellijidea, SiEclipseide, SiWordpress
} from 'react-icons/si';

import { FaDatabase, FaServer, FaShapes } from 'react-icons/fa'; // Ícones extras
import '../assets/styles/Expertise.scss';

// Lista de tecnologias com os ícones e cores
const techIcons = [
  { component: <SiTypescript size="3em" color="#3178C6" />, label: "TypeScript" },  // TypeScript
  { component: <SiJavascript size="3em" color="#F7DF1E" />, label: "JavaScript" },
  { component: <SiCss3 size="3em" color="#1572B6" />, label: "CSS" },
  { component: <SiSass size="3em" color="#CC6699" />, label: "SCSS" },
  { component: <SiHtml5 size="3em" color="#E34F26" />, label: "HTML" },
  { component: <SiReact size="3em" color="#61DBFB" />, label: "React" },
  { component: <SiAngular size="3em" color="#DD0031" />, label: "Angular" },
  { component: <SiVuedotjs size="3em" color="#42b883" />, label: "Vue.js" },        // Vue.js
  { component: <SiNodedotjs size="3em" color="#339933" />, label: "Node.js" },      // Node.js
  { component: <SiPython size="3em" color="#306998" />, label: "Python" },
  { component: <SiPhp size="3em" color="#777BB4" />, label: "PHP" },
  { component: <SiR size="3em" color="#276DC3" />, label: "R" },
  { component: <SiC size="3em" color="#68217A" />, label: "Clojure" },
  { component: <SiGit size="3em" color="#F05032" />, label: "Git" },
  { component: <SiDocker size="3em" color="#2496ED" />, label: "Docker" },
  { component: <SiAmazon size="3em" color="#FF9900" />, label: "AWS" },             // AWS
  { component: <FaDatabase size="3em" color="#00648B" />, label: "SQL" },
  { component: <FaServer size="3em" color="#333333" />, label: "Back-End" },
  { component: <FaShapes size="3em" color="#3D3D3D" />, label: "Three.js" },
  { component: <SiIntellijidea size="3em" color="#000000" />, label: "IntelliJ" },
  { component: <SiEclipseide size="3em" color="#2C2255" />, label: "Eclipse" },
  { component: <SiPostgresql size="3em" color="#336791" />, label: "PostgreSQL" },
  { component: <SiWordpress size="3em" color="#21759B" />, label: "WordPress" },
];

function Expertise() {
  return (
    <div className="expertise-container">
      <h1 className="expertise-title">Expertise</h1>
      <div className="icons-grid">
        {techIcons.map((tech, index) => (
          <div key={index} className="icon-wrapper">
            {tech.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
