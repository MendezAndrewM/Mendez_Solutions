import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";

const Home = props => {
    const [nav, setNav] = useState(0);

    return (<>
        {/* {nav ? <Nav/> : null}  */}
        {/* 1.Need Nav built 2.might not be using hooks right 3.null might be wrong(maybe just empty tag?)*/}
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
                                    <button className="HomeButton" >About</button>
                                </Col>
                                <Col xs={6  }>
                                    <button className="HomeButton">Contact</button>
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