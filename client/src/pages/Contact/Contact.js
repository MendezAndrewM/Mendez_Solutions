import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import ContentBox from "../../components/ContentBox/ContentBox"
import Form from "../../components/Form"
import Viewport from "../../Hooks"
import "../../assets/styles/grid.scss"

const useStyles = makeStyles(() => ({ root: { flexGrow: 1 } }))




const Contact = props => {
	
	const {width} = Viewport();
	const classes=useStyles();
	
	useEffect(()=> {
		document.getElementById("sideNav").style.width = "0";
	})


	return (
		<div className={classes.root + " Moop"}>
			<Grid container spacing={3}>
				
				<Grid container xs={12} md={3}>
					
					<Grid item xs={12}>
						<span className="contactItemHeader">Email</span>
					</Grid>
					<Grid item xs={12}>
						<span className="contactItem">Mendez.AndrewM@Gmail.com</span>
					</Grid>
					<Grid item xs={12}>
						<span className="contactItemHeader">Phone #</span>
					</Grid>
					<Grid item xs={12}>
						<span className="contactItem">(602)730-6092</span>
					</Grid>
					<Grid item xs={12}>
						<span className="contactItemHeader">Social Media</span>
					</Grid>
					<Grid item xs={12}>
						<div className="contactItem" id="socialButtons">
						<button>GitHub</button>
// 						<button>Codepen</button>
// 						<button>Linkedin</button>
						</div>
					</Grid>

				</Grid>

				<Grid container xs={12} md={9}>
					<ContentBox>
						<Form />
					</ContentBox>
				</Grid>
			</Grid>
		</div>
	)
}









// 	return(
// 			<>
// 		<div className="Moop">
// 			<Row>
// 				<Col xs={12} s={12} m={4} lg={4} xl={3}>
// 					<h1>Contact</h1>
// 				</Col>
// 				<Col xs={12} s={12} m={8} lg={8} xl={9}>
// 					<p>Some Stuff about this being the contact page...</p>
// 				</Col>
// 			</Row>
// 			<Row>
// 				<Col xs={12} s={12} m={4} lg={3} xl={2}>
// 					<div className="fillerBox">
// 						<p>email: qwertyuiop@asdfghjkl.zxcvbnm</p>
// 						<p>Phone</p>
// 						<br />
// 						<button>GitHub</button>
// 						<button>Codepen</button>
// 						<button>Linkedin</button>
// 					</div>
// 				</Col>
// 				<Col xs={12} s={12} m={8} lg={9} xl={10}>
// 					<Form />
// 				</Col>
// 			</Row>
// 		</div>

// 		<div className="Moop">
// 			<div className="TestThing"></div>
// 		</div>
// </>

// 	)


export default Contact;
