import React, { useState } from 'react';
import { Button, Col, Row, Carousel, Modal } from 'react-bootstrap';
import "../css/About.css";
import token from '../img/spirit_token.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import Slider from "react-slick";

// const Carousel = styled(Slider)`
//   height: 30vh;
//  overflow: hidden;

//   & > button {
//     opacity: 1;
//     height: 100%;
//     width: 15vw;
//     z-index: 1;

//     &:hover {
//       opacity: 1;
//       transition: opacity 0.2s ease 0s;
//     }
//   }

//   ul li button {
//     &:before {
//       top: -3vh;
//       font-size: 20px;
//       color: gray;
//       left: -35px;
//     }
//   }

//   li.slick-active button:before {
//     color: #e9af84;
//   }

//   .slick-list {
//     overflow: initial;
//   }

//   .slick-prev {
//     left: -75px;
//     width: 12vw;
//     height: 100%;
//     padding-left: 4%;
//   }

//   .slick-prev:before {
//     color: #e9af84;
//     font-size: 50px;
//   }

//   .slick-next {
//     right: -75px;
//     width: 12vw;
//     height: 100%;
//     padding-right: 4%;
//   }

//   .slick-next:before {
//     color: #e9af84;
//     font-size: 50px;
//   }
// `;

// const Wrap = styled.div`
// border-radius: 4px;
// cursor: pointer;
// position: relative;


// &:hover {
//   padding: 0;
//   // border: 4px solid rgba(249, 249, 249, 0.8);
//   transition-duration: 300ms;
// }
// }
// `;

const About = () => {
  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  const [showPlace2, setShowPlace2] = useState(false);
  const tooglePlace = () => setShowPlace(!showPlace);
  const tooglePlace2 = () => setShowPlace2(!showPlace2);
  const toogleShow3 = () => setShow3(!show3);
  const toogleShow2 = () => setShow2(!show2);
  const toogleShow = () => setShow(!show);

  return (
    <>
      <div id="hero">
        <div className='profile-title'>
          <h3>Your Profile : 5 <img src={token} alt="title" style={{ width: "70px", height: "90px" }} /> </h3>
        </div>
        <div className='caption-about'>
          <h1 style={{ fontSize: "100px" }}>accessed destinations</h1>
          <div style={{ display: "inline-flex" }}>
            <button className="box-1" onClick={tooglePlace}>
              New Haven, CT
            </button>  <button className='box-2' onClick={tooglePlace2}>
              Manhattan, NY
            </button>
          </div>
          <h1 style={{ fontSize: "100px" }}>past shared locations</h1>
          <Col md={12} className="m-auto pt-2">
            <Row>
              <Carousel>
                <Carousel.Item className='item-1' onClick={toogleShow}>
                  <h1>AirPlane in Oregon</h1>
                  <Carousel.Caption>
                    {/* <h3>Hillsboro</h3>
                    <p>Oregon</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item-1' onClick={toogleShow2}>
                  <h1>Farnam Memorial Garden</h1>
                  <Carousel.Caption>
                    {/* <h3>Hi</h3>
                    <p>Helloo</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item-1' onClick={toogleShow3}>
                  <h1>Marsh Botanical Garden</h1>
                  <Carousel.Caption>
                    {/* <h3>Hi</h3>
                    <p>Helloo</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Col>
        </div>
      </div>
      <Modal show={show} onHide={toogleShow}>
        <Modal.Header closeButton>
          <Modal.Title>AirPlane in Oregon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="../images/plane.jpeg" alt="airplane" style={{ width: "450px", height: "450px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toogleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={toogleShow2}>
        <Modal.Header closeButton>
          <Modal.Title>Farnam Memorial Garden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="../images/farnam.jpeg" alt="airplane" style={{ width: "450px", height: "450px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toogleShow2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={toogleShow3}>
        <Modal.Header closeButton>
          <Modal.Title>Marsh Botanical Garden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="../images/marsh.jpeg" alt="airplane" style={{ width: "450px", height: "450px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toogleShow3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showPlace} onHide={tooglePlace}>
        <Modal.Header closeButton>
          <Modal.Title>New Haven, CT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="../images/newHaven.jpeg" alt="airplane" style={{ width: "450px", height: "450px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={tooglePlace}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showPlace2} onHide={tooglePlace2}>
        <Modal.Header closeButton>
          <Modal.Title>Manhattan, NY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="../images/manhat.jpeg" alt="airplane" style={{ width: "450px", height: "450px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={tooglePlace2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}



export default About;
