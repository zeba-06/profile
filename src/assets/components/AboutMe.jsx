import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "./images/image1.png"; // adjust path

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // init with 1.2s duration, animate once
  }, []);

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center gx-2">
          {/* Left Side: Image with fade-right animation */}
          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
          >
            <Image
              src={aboutImage}
              alt="About Me"
              rounded
              fluid
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </Col>

          {/* Right Side: Text with fade-left animation */}
          <Col
            md={6}
            className="ps-3"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="300"
          >
            <h2 className="fw-bold mb-3">About Me</h2>
            <p className="text-muted" style={{ textAlign: "left" }}>
              I'm a creative and detail-oriented web developer with experience in React, JavaScript, and Bootstrap. I enjoy building clean, functional, and responsive web interfaces that provide excellent user experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
