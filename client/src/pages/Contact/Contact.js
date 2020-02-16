import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Form from "../../components/Form"
import "../../styles/grid.scss"
// const testObjs = [
// 	{
// 		label: "firstName",
// 		name: "First Name",
// 		type: "input",
// 		required: true,
// 		placeholder: "Jon",
// 		validation: false,
// 		col_xs: {span: 10, offset: 1},
// 		col_sm: {span: 6, offset: 0},
// 		col_md: {span: 6, offset: 0},
// 		col_lg: {span: 6, offset: 0},
// 		col_xl: {span: 4, offset: 0}
// 	},
// 	{
// 		label: "lastName",
// 		name: "Last Name",
// 		type: "input",
// 		required: false,
// 		placeholder: "Doe",
// 		validation: false,
// 		col_xs: {span: 10, offset: 1},
// 		col_sm: {span: 6, offset: 0},
// 		col_md: {span: 6, offset: 0},
// 		col_lg: {span: 6, offset: 0},
// 		col_xl: {span: 4, offset: 0}
// 	}
// ]

const Contact = props => {
	
	useEffect(()=> {
		document.getElementById("sideNav").style.width = "0";
	})

	return(
			<>
		<div className="Moop">
			<Row>
				<Col xs={12} s={12} m={4} lg={4} xl={3}>
					<h1>Contact</h1>
				</Col>
				<Col xs={12} s={12} m={8} lg={8} xl={9}>
					<p>Some Stuff about this being the contact page...</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} s={12} m={4} lg={3} xl={2}>
					<div className="fillerBox">
						<p>email: qwertyuiop@asdfghjkl.zxcvbnm</p>
						<p>Phone</p>
						<br />
						<button>GitHub</button>
						<button>Codepen</button>
						<button>Linkedin</button>
					</div>
				</Col>
				<Col xs={12} s={12} m={8} lg={9} xl={10}>
					<Form />
				</Col>
			</Row>
		</div>

		<div className="Moop">
			<div className="TestThing"></div>
		</div>
</>

	)
}

export default Contact;
