import React from "react";
// import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const Input = props => {
	// object schema should be:
	// 	label: title
	// 	name: name
	// 	type: "input" <- or text-area, radio, dropdown, etc.
	// 	required: boolean
	//	placeholder: "string" <- array if multiple options / null if not applicable
	// 	validation: false
	// 	col-xs: [span: 0-12, offset: 0-11]
	// 	col-sm: [span: 0-12, offset: 0-11]
	// 	col-md: [span: 0-12, offset: 0-11]
	// 	col-lg: [span: 0-12, offset: 0-11]
	// 	col-xl: [span: 0-12, offset: 0-11]
	let details = props.props
	let inputField;

	switch (details.type) {
		case "input":
			inputField = () => ( <> {console.log("details")}
				{details.name ? <span>{details.name}</span> : null}
				<input type={details.type} name={details.label} value={details.label} 
				placeholder={details.placeholder}  />
				</>
				)
			break;
		case "button":
			// button type
			break;
		case "checkbox":
			// checkbox type
			break;
		case "color":
			//color type
			break;
		case "date":
			// date type
			break;
		case "datetime-local":
			// this thing
			break;
		case "file":
			// file type
			break;
		case "email":
			// email type
			break;
		case "image":
			// img type
			break;
		case "number":
			// number type
			break;
		case "password":
			//password type
			break;
		case "radio":
			// radio type
			break;
		case "search":
			// search type
			break;
		case "submit":
			// submit type
			break;
		case "tel":
			// telephone type
			break;
		case "time":
			// time type
			break;
		case "url":
			// url type
			break;
		default: 
			// throw new Error("Object property 'type' must be a valid html <input> type (should be a string).")
			return (<>{console.log(details.type)}</>)
	}

	return (<> 
	{/* {console.log(details)} */}
		<Col xs={details.col_xs} sm={details.col_sm} 
		md={details.col_md} lg={details.col_lg} xl={details.col_xl} >
			{inputField()}
		</Col>
		</>
	)
}


export default Input;
/*
The following <input> types exist but are yet to be added:
(ref from https://www.w3schools.com/html/html_form_input_types.asp)

<input type="hidden">
<input type="month">
<input type="range">
<input type="reset">
<input type="week">

*/