import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./Nav.scss";

const Nav = () => {

	const openNav = e => {
		e.preventDefault();
		document.getElementById("sideNav").style.width = "55vw";
	}
	const closeNav = e => {
		e.preventDefault();
		document.getElementById("sideNav").style.width = "0";
	}


	return (
		<>
			<nav>
				<Row>
					<Col xs={10} sm={10} md={8} lg={6}>
						<Link to="/" id="navHeader">Mendez Solutions {console.log("vertical position needs to be fixed")}</Link>
					</Col>
					<Col xs={2} sm={2} md={4} lg={6}>
						<Row className="justify-content-xs-end justify-content-sm-end 
						justify-content-md-end justify-content-lg-end justify-content-xl-end">
							<ul id="navLinks">
								<li className="navItem">
									<Link to="/About" onClick={closeNav}>About</Link>
								</li>
								<li className="navItem">
									<Link to="/Profile" onClick={closeNav}>Profile</Link>
								</li>
								<li className="navItem">
									<Link to="/Contact" onClick={closeNav}>Contact</Link>
								</li>
								<li id="hamburger">
									<i className="fa fa-bars fa-lg" onClick={openNav}></i>
								</li>
							</ul>
						</Row>
					</Col>
				</Row>
			</nav>
			<div id="sideNav" class="sidePanel">
				<span class="closeBtn" onClick={closeNav}>&times;</span>
				<Link to="/About" onClick={closeNav}>About</Link>
				<Link to="/Profile" onClick={closeNav}>Profile</Link>
				<Link to="/Contact" onClick={closeNav}>Contact</Link>
			</div>
		</>
	)
}
	
export default Nav;



/*

############ Instead of current switch container in App.js:

const Navbar = props => {
  const path = props.location.pathname !== "/";
  return (
      path ? (
        <>
        Navbar
        <Link to="/">Home</Link>
        </>
      ) : null
  );
};
export default withRouter(Navbar);
*/