import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import "../css/About.css";
import Card from "./HomeScreen/Card";

const About = () => {
    const [detail, setDetail] = useState(false);
    const [detail2, setDetail2] = useState(false);
    const [detail3, setDetail3] = useState(false);
    const [detail4, setDetail4] = useState(false);
    const toogleDetail = () => setDetail(!detail);
    const toogleDetail2 = () => setDetail2(!detail2);
    const toogleDetail3 = () => setDetail3(!detail3);
    const toogleDetail4 = () => setDetail4(!detail4);
    return (
        <>
            <div className="about-banner2 bg-blue">
                {/* <Row className="about-banner2-left"> */}
                <Row className="places-card">
                    <Card
                        name="Farnam Memorial Garden"
                        categories="nature"
                        text="I used to come here whenever I wanted to get away from it all. I would literally
                        sprint a mile from where I lived and just lay down in the grass."
                        img="../images/Farnam.jpeg"
                        link="https://goo.gl/maps/oHasT5xf6E6LJvoK9"
                        toogleDetail={toogleDetail}
                    />
                </Row>
                <Row className="places-card">
                    <Card
                        name="Grove Street Cemetery"
                        categories="nature"
                        categories2="wacky"
                        text="Went on a date with my boyfriend here in the spring, and it was so
                        beautiful. The flowers were blooming and it was very peaceful and.
                        "
                        img="../images/Grove.jpeg"
                        link="https://goo.gl/maps/gVee8xg6gJiDSAia9"
                        toogleDetail={toogleDetail2}
                    />
                </Row>
                <Row className="places-card">
                    <Card
                        name="Marsh Botanical Garden"
                        categories="nature"
                        img="../images/Marsh.jpeg"
                        link="https://goo.gl/maps/EcLqC43TVXfsiiVH9"
                        toogleDetail={toogleDetail3}
                    />
                </Row>
                <Row className="places-card">
                    <Card
                        name="Airplane Graveyard"
                        categories=""
                        categories2="wacky"
                        img="../images/plane.jpeg"
                        link="https://goo.gl/maps/jNnEWdaNfWf63SWMA"
                        toogleDetail={toogleDetail4}
                    />
                </Row>
            </div>
            <Modal show={detail} onHide={toogleDetail}>
                <Modal.Header closeButton>
                    <Modal.Title>Farnam Memorial Garden</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        I used to come here whenever I wanted to get away from it all. I would
                        literally sprint a mile from where I lived and just lay down in the grass.
                    </p>
                </Modal.Body>
            </Modal>
            <Modal show={detail2} onHide={toogleDetail2}>
                <Modal.Header closeButton>
                    <Modal.Title>Grove Street Cemetery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Went on a date with my boyfriend here in the spring, and it was so
                        beautiful. The flowers were blooming and it was very peaceful and.
                    </p>
                </Modal.Body>
            </Modal>
            <Modal show={detail3} onHide={toogleDetail3}>
                <Modal.Header closeButton>
                    <Modal.Title>Marsh Botanical Garden</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        I used to come here whenever I wanted to get away from it all. I would
                        literally sprint a mile from where I lived and just lay down in the grass.
                    </p>
                </Modal.Body>
            </Modal>
            <Modal show={detail4} onHide={toogleDetail4}>
                <Modal.Header closeButton>
                    <Modal.Title>Airplane Graveyard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        I used to come here whenever I wanted to get away from it all. I would
                        literally sprint a mile from where I lived and just lay down in the grass.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default About;
