import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a graduate of the Generation Junior Software Developer Bootcamp looking for a software developer position
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> CSS, Javascript and Mongo. </b>
              </i>
              <br />
              <br />
              I have more than 5 years of working experience in the service field.   &nbsp;
              <i>
                <b className="purple">This allowed me to develop </b> my communication and <b className="purple">teamwork skills.</b>
              </i>
              <br />
              <br />
              I am keen to use   
              <b className="purple">my previous work experience</b> and
              <i>
                <b className="purple">
                  {" "}
                  newly developed technical skills
                </b>
              </i>
              &nbsp; to launch my career in 
              <i>
                <b className="purple"> the technology sector.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kanyawadee24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kanyawadee/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kanya.wd/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
