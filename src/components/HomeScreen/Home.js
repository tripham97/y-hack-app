// import React from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import "../../css/Home.css";
// import token from "../../img/spirit_token.png";
// import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div className="mb-1">
//       <div
//         className="mb-2"
//         style={{ display: "flex", justifyContent: "center", borderSpacing: 10 }}
//       >
//         <Image
//           style={{ top: "50%", height: "20%", width: "20%" }}
//           src={token}
//           fluid
//           rounded
//         />
//         <Container className="box my-auto">
//           <Row>
//             <h1>Login</h1>
//           </Row>

//           <Row>
//             <Col>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label column="llg" lg={2}>
//                     Username:
//                   </Form.Label>
//                   <Form.Control type="email" placeholder="Enter username" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password:</Form.Label>
//                   <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                   <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//                 <Form.Group>
//                   <Form.Text className="text-muted">
//                     New here?<Link to="/Signup">Signup</Link>
//                   </Form.Text>
//                 </Form.Group>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import "../../css/Home.css";
import { useNavigate, useLocation } from 'react-router-dom'
import token from "../../img/spirit_token.png";
import { Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleonClick = (page) => () => {
    navigate(`/${page}`);
  }
  return (
    <>
      <div id="hero">
        <div className='texture'></div>
        <div className='caption'>
          <h1>You have <span style={{ color: "#ffd773" }}>5</span>  <img src={token} alt="token" style={{ width: "100px", height: "150px" }} /> tokens.</h1>
          <input type="text" placeholder="Where do you want to go?" />
          <div>
            <Button className="btn-search" onClick={handleonClick("SearchPage")}>Search Here</Button>
          </div>
          <h2>Alternatively, share your favorite spots with us</h2>
        </div>
      </div>
      {/* <div id="hero">
                <div className='texture'></div>
                <div className='caption'>
                    <h1>You have no tokens.</h1>
                    <input type="text" placeholder="Search" />
                    <h2>Start sharing or verify your own favorite spots</h2>
                </div>
            </div> */}
    </>
  )
}

export default Home;
