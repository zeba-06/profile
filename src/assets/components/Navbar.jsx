import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

const CenteredNavbar = () => {
  return (
    <Navbar expand="md" className="custom-navbar fixed-top">
      <Container className="justify-content-center">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">About Me</Nav.Link>
          <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
          <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
          <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CenteredNavbar;
