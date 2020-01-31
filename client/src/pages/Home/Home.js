import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = props => {

    return (<>
   
        <Container>

            <Row className="justify-content-xs-center justify-content-lg-start">
                <Col xs={12} md={8} lg={6} xl={6} id="Title">
                    <Row>
                        <Col sm={12}>
                            <span id="Header">Mendez Solutions</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <span id="subTitle" >A place where your problems get solved.</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span:10, offset:0}}>
                            <Row className="HomeButtons">
                                <Col xs={6}>
                                    <Link to="/About">
                                        <button className="HomeButton">About</button>
                                    </Link>
                                </Col>
                                <Col xs={6  }>
                                    <Link to="/Contact">
                                        <button className="HomeButton">Contact</button>
                                    </Link>
                                </Col>       
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={7} xl={8} id="Animation">
                </Col>
            </Row>

        </Container>
    </>)
}

export default Home;