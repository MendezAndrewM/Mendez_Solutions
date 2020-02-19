import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {activeOpt, activeReq, inactiveOpt, inactiveReq} from "./injections"


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
	flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function Form() {

	const classes = useStyles();
	const [nameClicked, clickName] = useState(false)
	const [orgClicked, clickOrg] = useState(false)
	const [emailClicked, clickEmail] = useState(false)
	const [phoneClicked, clickPhone] = useState(false)
	const [messageClicked, clickMessage] = useState(false)

	const NameField = withStyles( nameClicked ? activeReq : inactiveReq)(TextField);
	const OrgField = withStyles( orgClicked ? activeOpt : inactiveOpt)(TextField);
	const EmailField = withStyles( emailClicked ? activeReq : inactiveReq)(TextField);
	const PhoneField = withStyles( phoneClicked ? activeOpt : inactiveOpt)(TextField);
	const MessageField = withStyles( messageClicked ? activeReq : inactiveReq)(TextField);

	return (
		<form className={classes.root} noValidate>
			<NameField
				className={classes.margin}
				label="First & Last Name"
				required
				variant="outlined"
				id="nameField"
				// helperText="Required!"
				onFocus={() => {
					clickName(true);
					setTimeout(
						() => document.getElementById("nameField").focus(),
						1
					);
				}}
			/>
			<OrgField 
				className={classes.margin}
				label="Organization"
				variant="outlined"
				id="organizationField"
				// helperText={orgClicked ? "Optional" : ""}
				onFocus={() => {
					clickOrg(true);
					setTimeout(
						() => document.getElementById("organizationField").focus(),
						1
					);
				}}
			/>
			<EmailField
				className={classes.margin}
				label="Email"
				required
				variant="outlined"
				id="emailField"
				onFocus={() => {
					clickEmail(true);
					setTimeout(
						() => document.getElementById("emailField").focus(),
						1
					);
				}}
			/>
			<PhoneField
				className={classes.margin}
				label="Phone Number"
				variant="outlined"
				id="phoneField"
				onFocus={() => {
					clickPhone(true);
					setTimeout(
						() => document.getElementById("phoneField").focus(),
						1
					);
				}}
			/>
			<MessageField
				className={classes.margin}
				label="Message"
				required
				variant="outlined"
				multiline
				rows={4}
				id="messageField"
				onFocus={() => {
					clickMessage(true);
					setTimeout(
						() => document.getElementById("messageField").focus(),
						1
					);
				}}
			/>
		</form>
  	);
}
