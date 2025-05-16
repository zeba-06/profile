
import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";


import htmlLogo from "./images/html.png";
import cssLogo from "./images/css.png";
import jsLogo from "./images/js.png";
import bootstrapLogo from "./images/bootstap.png";
import reactLogo from "./images/react.png";
import sqlLogo from "./images/sql.png";
import nodejsLogo from "./images/nodejs.png";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "React", logo: reactLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "Node.js", logo: nodejsLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-white">
      <Container className="text-center">
        <h2 className="fw-bold mb-4">Skills</h2>

        <p
          className="text-muted mb-5"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          These are the technologies I work with to build full‑stack, responsive,
          and scalable applications. I continuously learn and adapt with the
          latest in modern web development.
        </p>

        <div className="skills-slider mb-4">
          <div className="skills-track">
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
