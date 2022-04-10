import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnClick = (page) => () => {
    navigate(`/${page}`);
  };
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "gray",
        }}
      >
        <Col className="footer-left">
          <img src={logo} alt="logo" onClick={handleOnClick("")} />
        </Col>
        <Col className="footer-right">
          <button onClick={handleOnClick("")}> Home </button>
          <button onClick={handleOnClick("about")}> About Us </button>
          <button onClick={handleOnClick("contact")}> Contact Us </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
