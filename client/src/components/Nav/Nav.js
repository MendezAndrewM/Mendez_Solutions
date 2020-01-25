import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./Nav.css";

const Nav = props => (
	<>
		<Row>
			<Col xs={10} sm={9} md={8}>
				<Link id="navHeader"></Link>
			</Col>
			<Col className="justify-content-xs-end">
				<ul>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/Profile">Profile</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</Col>
		</Row>
	</>
)
	

export default Nav;