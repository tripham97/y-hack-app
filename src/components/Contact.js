import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../css/Home.css";
import token from "../img/spirit_token.png";
import Image from "react-bootstrap/Image";

const Contact = () => {
  return (
    <div className="mb-1">
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
            <h1>Contact Us</h1>
          </Row>

          <Row>
            <Col>
              Yhack 22' The Four Musketeers: Alana Liu, Janus Zhu, Tri Pham,
              Rayan Sheikh
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
