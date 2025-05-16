import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Project.css";
import tourImage from "./images/tour.png";
import foodImage from "./images/food.webp";
import appImage from "./images/app.png";

const projectData = [
  {
    id: 1,
    title: "Tourism Website",
    description:
      "India's Iconic Destinations. This website offers a comprehensive collection of India's most popular destinations, facilitating effortless travel planning.",
    image: tourImage,
    link: "https://tourismws1.ccbp.tech/",
  },
  {
    id: 2,
    title: "Food App",
    description:
      "Food Munch's user-friendly interface simplifies browsing and ordering, while its efficient order management system ensures smooth processing and delivery.",
    image: foodImage,
    link: "https://foodmunchws2.ccbp.tech/",
  },
  {
    id: 3,
    title: "Mobile App",
    description:
      "Implemented a Novel Search Process. This platform offers a user-friendly search function, allowing for effortless exploration of diverse topics.",
    image: appImage,
    link: "https://wikipediaws3.ccbp.tech/",
  },
];

const Project = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleClick = (id) => {
    setActiveOverlay(activeOverlay === id ? null : id);
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <Row className="g-4 justify-content-center">
          {projectData.map((project) => (
            <Col key={project.id} md={4} className="d-flex justify-content-center">
              <div
                className={`project-card ${activeOverlay === project.id ? "active" : ""}`}
                onClick={() => handleClick(project.id)}
              >
                <img src={project.image} alt={project.title} />
                <div className={`overlay ${activeOverlay === project.id ? "show" : ""}`}>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <Button
                    className="circle-btn"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                  >
                    🔗
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
