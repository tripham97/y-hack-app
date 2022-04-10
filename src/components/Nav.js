
   
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Nav.css";
import logo from "../img/logo.png";
import about from "../img/about.png";
import profile from "../img/profile.png";
//import Image from "react-bootstrap/Image";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleonClick = (page) => () => {
    navigate(`/${page}`);
  };
  return (
    <Container className="nav-container">
      <Row style={{
                display: "flex"
                , justifyContent: "space-around"
            }}> 
        <Col className='nav-left'>
            <img 
            src={logo} 
            alt='logo' 

            onClick={handleonClick("")} />
            
        </Col>
        <Col className="nav-middle">
          <img
            /*style={{ top: "50%", height: "20%", width: "20%" }}
            src={logo}
            alt="logo"
            onClick={handleonClick("")}*/
          />
        </Col>
        <Col className="nav-right">
            <img 
            src={about} 
            alt='about' 

            onClick={handleonClick("about")} />  
            
            <img 
            src={profile} 
            alt='profile'
            /*onClick={handleonClick("profile")}*/ /> 

            <button onClick={handleonClick("login")}> Login </button>
            <button onClick={handleonClick("searchPage")}> Search </button>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
