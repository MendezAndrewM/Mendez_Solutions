import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = props => {
    const [nav, setNav] = useState(0);

    return (<>
        {/* {nav ? <Nav/> : null}  */}
        {/* 1.Need Nav built 2.might not be using hooks right 3.null might be wrong(maybe just empty tag?)*/}
        <Container>

            <Row>
                <Col xs={{span:10, offset:1}} md={6} lg={5} xl={4} id="Title">
                    <Row>
                        <h1 id="Header">Mendez Solutions</h1>
                    </Row>
                    <Row>
                        <h4 id="subTitle">A place where your problems get solved</h4>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <button className="HomeButton" >About</button>
                        </Col>
                        <Col xs={6}>
                            <button className="HomeButton">Contact</button>
                        </Col>       
                    </Row>
                </Col>
                <Col md={6} lg={7} xl={8} id="Animation">

                </Col>
            </Row>


            <div id="start" class="row">
                <div class="s8 m6 offset-s2" id="title">
                    <h2>Andrew Mendez</h2>
                    <p>Full Stack Developer. Here to Develop Your Things</p>
                </div>
                <div class="s8 m4" id="start-btns">
                    <button id="profile-btn">See Profile <i class="material-icons tiny">forward</i></button>
                    <button id="portfolio-btn">Explore Work <i class="material-icons tiny">forward</i></button>
                </div>
            </div>





        </Container>
    </>)
}

export default Home;