import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import profileImage from "./images/image1.png";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="position-relative overflow-hidden text-white"
      style={{ minHeight: "100vh", backgroundColor: "#0f0c29" }}
    >
     
      <div className="flower-bg">
        <div className="flower-blob blob1"></div>
        <div className="flower-blob blob2"></div>
        <div className="flower-blob blob3"></div>
      </div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col
            md={6}
            className="text-center text-md-start mb-4 mb-md-0"
            data-aos="fade-right"
          >
            <h1 className="display-4 fw-bold">Hi, I'm Zeba Naaz</h1>
            <p className="lead text-light">
              I'm a passionate web developer specializing in modern and responsive web applications.
            </p>
          </Col>

          <Col md={6} className="text-center" data-aos="fade-left">
            <Image
              src={profileImage}
              alt="Profile"
              roundedCircle
              fluid
              style={{ maxWidth: "300px", border: "4px solid #fff" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
