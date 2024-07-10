import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointDown, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Kanyawadee Kongkaew </span>
            from <span className="purple"> Bangkok</span>
            <br />
            I am currently practicing programming and intend to transition into
            IT.
            <br />
            I graduated from the Bootcamp Generation Thailand program
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <p>🍳 Cooking</p>
            </li>
            <li className="about-activity">
              <p>📺 Watching movies</p>
            </li>
            <li className="about-activity">
              <p>🏊🏻‍♀️ Swimming</p>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "this is life not heaven, you don't have to be perfect!"{" "}
          </p>
          <footer className="blockquote-footer">Kanyawadee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
