import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import token from "../img/logo.png";
import about from "../img/about.png";
import profile from "../img/profile.png";
import '../css/Nav.css'

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleonClick = (page) => () => {
    navigate(`/${page}`);
  }
  return (
    <Container className='nav-container'>
      <Row style={{
        display: "flex"
        , justifyContent: "space-around"
      }}>
        <Col className='nav-left'>
          <img src={token} alt='logo' onClick={handleonClick("HomeScreen")} />
        </Col>
        <Col className='nav-middle'>
        </Col>
        <Col className='nav-right'>
          <button onClick={handleonClick("contact")}>
            <img src={about} alt='about' />
          </button> <button onClick={handleonClick("about")}>
            <img src={profile} alt='profile' />
          </button>

        </Col>
      </Row>
    </Container>
  )
}

export default NavBar;
