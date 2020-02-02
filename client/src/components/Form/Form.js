import React from "react";
// import { Link } from "react-router-dom";
// import { Row, Col } from "react-bootstrap";
import Input from "./Input";

const Form = props => {
	
	// Props should be an array of objects, each object representing a different Input field.
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

	const fields = props.props.filter(e => e.type !== "button");
	// const submit = props.props.filter(e => e.type === "button");

	return (
		<form> {console.log("inputs = ", fields)}
			{/* { inputs.forEach(field => <Input details={field} />) } */}
			{fields.map(obj => <Input props={obj} />)}
		</form>
	)
}

export default Form