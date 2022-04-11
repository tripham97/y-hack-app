import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import token from "../../img/spirit_token.png";
import about from "../../img/about.png";
import profile from "../../img/profile.png";
import '../../css/Nav.css'
import Places from '../Places'

const SearchPage = () => {
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
                <Col className='nav-middle-search'>
                    <input type="text" placeholder="Where do you want to go?" />
                    <Button className="btn-search" onClick={handleonClick("ManualSearchPage")}>More Detail</Button>
                    {/* <Button className="btn-search" onClick={handleonClick("SearchArea")}>Quick Search</Button> */}
                </Col>
            </Row>
            <Places />
        </Container>
    )
}

export default SearchPage;
