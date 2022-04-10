import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../css/Home.css";
import token from "../img/spirit_token.png";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div>
      <div
        className="mb-2"
        style={{ display: "flex", justifyContent: "center", borderSpacing: 10 }}
      >
        <Image
          style={{ top: "50%", height: "20%", width: "20%" }}
          src={token}
        />
        <Container className="box my-auto">
          <Row>
            <h1>About Us</h1>
          </Row>

          <Row>
            <Col>
              Wisp is a travel app that suggests locations/activities based on
              uniqueness, affordability, and interests, not popularity. User
              crowdsourced. For the new generation.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
