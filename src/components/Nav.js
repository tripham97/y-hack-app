import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Nav.css";
import logo from "../img/logo.png";
import Image from "react-bootstrap/Image";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleonClick = (page) => () => {
    navigate(`/${page}`);
  };
  return (
    <Container className="nav-container">
      <Row>
        <Col className="nav-middle">
          <img
            style={{ top: "50%", height: "20%", width: "20%" }}
            src={logo}
            alt="logo"
            onClick={handleonClick("")}
          />
        </Col>
        <Col className="nav-right">
          <button onClick={handleonClick("")}> Home </button>
          <button onClick={handleonClick("about")}> About Us </button>
          <button onClick={handleonClick("contact")}> Contact Us </button>
          <button onClick={handleonClick("login")}> Login </button>
          <button onClick={handleonClick("searchPage")}> Search </button>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
