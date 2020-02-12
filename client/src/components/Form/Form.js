import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCity, faEnvelope, faPhone, faPen } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from "react-bootstrap";
import "./Form.scss";
// import Input from "./Input";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
  }

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
	useEffect(() => {
	  function handleResize() {
		setWindowDimensions(getWindowDimensions());
	  }
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
  }


const Form = props => {
	
	const { height, width } = useWindowDimensions();
	//Hard Coded:
	return(
		<Container>
			<form>
														
				<Row className="formRow">
														{/* Name Field */}
					<Col xs={12} sm={12} md={10} lg={6} xl={6} className="input-field">
						<Row>
							<Col xs={1}>
								<FontAwesomeIcon icon={faUser} size={width > 390 ? "2x" : "1x"} className="formIcon" />
							</Col>
							<Col xs={11}>
								<div class="floating-label-wrap">
									<input type="text" className="floating-label-field floating-label-field--s3" 
										maxLength="30" id="formName" placeholder="Name" required />
									<label for="formName" className="floating-label">Name</label>
								</div>
							</Col>
						</Row>
					</Col>
														{/*  Org Field */}
					<Col xs={12} sm={12} md={10} lg={6} xl={6} className="input-field">
						<Row>
							<Col xs={1}>
								<FontAwesomeIcon icon={faCity} size={width > 390 ? "2x" : "1x"} className="formIcon" />
							</Col>
							<Col xs={11}>
								<div class="floating-label-wrap">
									<input type="text" className="floating-label-field floating-label-field--s3" 
										maxLength="30" id="formOrg" placeholder="Organization" />
									<label for="formOrg" className="floating-label">Organization</label>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className="formRow">
														{/* Email Field */}
					<Col xs={12} sm={12} md={10} lg={6} xl={6} className="input-field">
						<Row>
							<Col xs={1}>
								<FontAwesomeIcon icon={faEnvelope} size={width > 390 ? "2x" : "1x"} className="formIcon" />
							</Col>
							<Col xs={11}>
								<div class="floating-label-wrap">
									<input type="email" className="floating-label-field floating-label-field--s3" 
										maxLength="50" id="formEmail" placeholder="Email" required />
									<label for="formEmail" className="floating-label">Email</label>
								</div>
							</Col>
						</Row>
					</Col>
														{/* Phone Field */}
					<Col xs={12} sm={12} md={10} lg={6} xl={6} className="input-field">
						<Row>
							<Col xs={1}>
								<FontAwesomeIcon icon={faPhone} size={width > 390 ? "2x" : "1x"} className="formIcon" />
							</Col>
							<Col xs={11}>
								<div class="floating-label-wrap">
									<input type="text" className="floating-label-field floating-label-field--s3" 
										maxLength="30" id="formPhone" placeholder="Phone" />
									<label for="formPhone" className="floating-label">Phone</label>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className="formRow">
														{/* Message Area */}
					<Col xs={12} sm={12} md={12} lg={12} xl={12} className="input-field">
						<Row>
							<Col xs={1}>
								<FontAwesomeIcon icon={faPen} size={width > 390 ? "2x" : "1x"} className="formIcon" />
							</Col>
							<Col xs={11}>
								<div class="floating-label-wrap">
									<input type="text" className="floating-label-field floating-label-field--s3" 
										maxLength="300" id="formMessage" placeholder="Message" required />
									<label for="formMessage" className="floating-label">Message</label>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>

			</form>
		</Container>
	)



			
	// Dynamic Option:
	// const fields = props.props.filter(e => e.type !== "button");
	// const submit = props.props.filter(e => e.type === "button");
	// return (
	// 	<form> {console.log("inputs = ", fields)}
	// 		{/* { inputs.forEach(field => <Input details={field} />) } */}
	// 		{fields.map(obj => <Input props={obj} />)}
	// 	</form>
	// )



}

export default Form