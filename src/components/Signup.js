import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../css/Home.css";
import token from "../img/spirit_token.png";
import Image from "react-bootstrap/Image";
const Home = () => {
  return (
    <div
      className="mb-2"
      style={{ display: "flex", justifyContent: "center", borderSpacing: 10 }}
    >
      <Image style={{ top: "50%", height: "20%", width: "20%" }} src={token} />
      <Container className="box my-auto">
        <Row>
          <h1>New User</h1>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label column="llg" lg={2}>
                  Username:
                </Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="New password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
