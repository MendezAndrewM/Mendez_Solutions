import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {activeOpt, activeReq, inactiveOpt, inactiveReq} from "./injections"
import { Grid } from '@material-ui/core';
import hook from "../../Hooks"


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
	flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  gridRoot: {
	  flexGrow:1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Form() {

	const classes = useStyles();
	const { width } = hook.useViewport();
	const {inputs, handleInputChange, handleSubmit} = hook.useFormInputs();

	const [firstNameClicked, clickFirstName] = useState(false)
	const [lastNameClicked, clickLastName] = useState(false)
	const [orgClicked, clickOrg] = useState(false)
	const [emailClicked, clickEmail] = useState(false)
	const [phoneClicked, clickPhone] = useState(false)
	const [phoneExtClicked, clickPhoneExt] = useState(false)
	const [messageClicked, clickMessage] = useState(false)

	const NameField = withStyles( firstNameClicked ? activeReq : inactiveReq)(TextField);
	const NameField2 = withStyles( lastNameClicked ? activeReq : inactiveReq)(TextField);
	const OrgField = withStyles( orgClicked ? activeOpt : inactiveOpt)(TextField);
	const EmailField = withStyles( emailClicked ? activeReq : inactiveReq)(TextField);
	const PhoneField = withStyles( phoneClicked ? activeOpt : inactiveOpt)(TextField);
	const PhoneField2 = withStyles( phoneExtClicked ? activeOpt : inactiveOpt)(TextField);
	const MessageField = withStyles( messageClicked ? activeReq : inactiveReq)(TextField);
	


	return (
		<form className={classes.root, classes.gridRoot} onSubmit={handleSubmit} noValidate>
			<Grid container spacing={2}>
				<Grid item xs={6} md={4}>
					<NameField
						className={classes.margin}
						label="First Name"
						name="firstName"
						required
						variant="outlined"
						id="firstNameField"
						onChange={handleInputChange}
						value={inputs.firstName}
						// helperText="Required!"
						onFocus={() => {
							if(!firstNameClicked) {
								clickFirstName(true);
								setTimeout(
									() => document.getElementById("firstNameField")
									.focus(), 1
								);
							}
						}}
					/>
				</Grid>
				<Grid item xs={6} md={4}>
					<NameField2
						className={classes.margin}
						label="Last Name"
						required
						variant="outlined"
						id="lastNameField"
						// helperText="Required!"
						onFocus={() => {
							clickLastName(true);
							setTimeout(
								() => document.getElementById("lastNameField").focus(),
								1
							);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={4}>
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
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<EmailField
						className={classes.margin}
						label="Email"
						type="email"
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
				</Grid>
				<Grid item xs={8} sm={4} md={4}>
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
				</Grid>
				<Grid item xs={4} sm={2} md={2}>
					<PhoneField2
						className={classes.margin}
						label="Ext"
						variant="outlined"
						id="phoneExtField"
						onFocus={() => {
							clickPhoneExt(true);
							setTimeout(
								() => document.getElementById("phoneExtField").focus(),
								1
							);
						}}
					/>
				</Grid>
				<Grid item xs={12}>
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
				</Grid>
				<Grid container justify={width > 600 ? "left" : "center"}>
					<Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
						<button type="submit" id="contactSubmit" style={{width:'100%', borderRadius: '5px', marginLeft:'4%'}}>Submit</button>
					</Grid>
				</Grid>
			</Grid>
		</form>
  	);
}
