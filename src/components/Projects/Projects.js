import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="PotionCafe"
              description="Project presents a fully functional e-commerce platform tailored for a coffee shop, aimed at enhancing customer experience and optimizing online sales. With a user-friendly interface, it allows coffee enthusiasts to explore diverse products, securely place orders, Developed using modern web technologies "
              ghLink="https://github.com"
              demoLink="l"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="one day react project"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptatum modi tenetur. Possimus dicta beatae omnis dolores odio amet commodi? Quasi voluptatum modi tenetur.  dolor sit amet consectetur adipisicing elit.  Modi sunt nesciunt itaque natus!"
              ghLink="https://github.com/kanyawadee24/12-party-react"
              demoLink="https://12-party-react.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
