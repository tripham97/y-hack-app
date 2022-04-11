import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import * as FA from "react-icons/fa";
import "../../css/Card.css";

const CarDetail = ({ name, categories, categories2, img, text, link }) => {
    return (
        <Card className="Card-info" style={{ marginBottom: "0 !important" }}>
            <Row>
                <Col xs={12} md={4}>
                    <Card.Img variant="top" src={img} className="img-fluid" />
                </Col>
                <Col xs={12} md={8}>
                    <Card.Body>
                        <Card.Text style={{ position: "relative" }}>
                            <h2>{name}</h2>
                            <h3>{categories}</h3>
                            <h3>{categories2}</h3>
                            <p>{text}</p>
                            <a href={link} target="_blank">
                                Get Directions
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default CarDetail;
