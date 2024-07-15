import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import potioncafe from "../../Assets/Projects/potioncafe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={potioncafe}
              isBlog={false}
              title="PotionCafe"
              description="Project presents a fully functional e-commerce platform tailored for a coffee shop, aimed at enhancing customer experience and optimizing online sales. With a user-friendly interface, it allows coffee enthusiasts to explore diverse products, securely place orders, Developed using modern web technologies "
              ghLink="https://github.com/kanyawadee24/group1_frontend"
              demoLink="https://group1-frontend.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
