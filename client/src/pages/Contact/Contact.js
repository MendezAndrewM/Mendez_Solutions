import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Form from "../../components/Form"

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

	return (
		<Container>
			<p>-- contact page --</p>
			<Form />
		</Container>
	)
}

export default Contact;
