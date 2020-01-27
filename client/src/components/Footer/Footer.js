import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => (
	<footer>
		<ul>
			<Row>
				<Col xs={{span: 1, offset:4}}>
					<li className="footLink">
						<Link to="/">Home</Link>
					</li>
				</Col>
				<Col xs={1}>
					<li className="footLink">
						<Link to="/Contact">Contact</Link>
					</li>
				</Col>
				<Col xs={1}>
					<li className="footLink">
						<Link to="/About">About</Link>
					</li>
				</Col>
				<Col xs={1}>
					<li className="footLink">
						<Link to="/Portfolio">Portfolio</Link>
					</li>
				</Col>
			</Row>
		</ul>
		<Row className="justify-content-xs-center justify-content-sm-center 
		justify-content-md-center justify- Mendez Solutionscontent-lg-center justify- Mendez Solutionscontent-xl-center">
			<span id="copyWrite">&copy; Mendez Solutions</span>
		</Row>
	</footer>
)

export default Footer;