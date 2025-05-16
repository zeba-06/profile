import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }
    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#0f0c29", color: "white" }}>
      <Container>
        <Row className="justify-content-center align-items-start">
       
          <Col
            md={5}
            className="mb-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="mb-4">Contact</h3>

            <p>
              <FaEnvelope />{" "}
              <a href="mailto:zebanazinazi@gmail.com" className="text-decoration-none text-white">
                zebanazinazi@gmail.com
              </a>
            </p>
            <p>
              <FaPhone />{" "}
              <a href="tel:+917483852197" className="text-decoration-none text-white">
                +91 7483852197
              </a>
            </p>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white d-flex align-items-center"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white d-flex align-items-center"
              >
                <FaInstagram size={22} />
              </a>
            </div>

            <Button
              variant="outline-light"
              href="/path/to/your-cv.pdf"
              download
              className="mt-4"
              style={{ borderRadius: "50px", opacity: 0.8 }}
            >
              <FaDownload /> Download My CV
            </Button>
          </Col>

       
          <Col
            md={6}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="mb-4">Get In Touch</h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
           variant="outline-light"
            type="submit"
             className="mt-4"
            style={{ borderRadius: "50px", opacity: 0.8 }}
               >
          Send Message
            </Button>

            </Form>

          
            {showSuccess && (
              <Alert
                variant="success"
                onClose={() => setShowSuccess(false)}
                dismissible
                className="mt-3"
              >
                We have received your message.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
