import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../../css/Home.css";

const Home = () => {
  return (
    <div
      className="mb-2"
      style={{ display: "flex", justifyContent: "center", borderSpacing: 10 }}
    >
      <Container className="box my-auto">
        <Row>
          <h1>Login</h1>
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
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Group>
                <Form.Text className="text-muted">
                  New here?<a href="#">Sign up</a>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
