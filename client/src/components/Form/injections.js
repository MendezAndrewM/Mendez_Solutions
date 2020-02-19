const inactiveOpt = {
	root: {
		
		'&, input, label':{
			color: "rgb(179, 179, 179)",
			width: "100%"
		},
		'& label.Mui-focused': { // In Focus
			color: 'rgb(2, 184, 230)'
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'rgb(2, 184, 230)',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'rgb(170, 170, 170)',
			},
			'&:hover fieldset': {
				borderColor: 'rgba(82, 135, 167, 0.692)',
				
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(2, 184, 230)'
			},
	  	},
	}
};
const inactiveReq = {
	root: {
		'&, input, label':{
			color: "rgb(179, 179, 179)",  // default text color (grey)
			width: "100%"
		},
		
		'& label.Mui-focused': { // Label color when in focus (cyan-ish)
			color: 'rgb(2, 184, 230)'
		},
		'& input:valid:focus + fieldset': {
			borderLeftWidth: 6,
			padding: '4px !important', // override inline-style
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'rgb(170, 170, 170)',
			},
			'&:hover fieldset': {
				borderColor: 'rgba(82, 135, 167, 0.692)',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(2, 184, 230)'
			},
		}
  }
};
const activeOpt = {
	root: {
		
		'&, input, label':{
			color: "rgb(179, 179, 179)",
			width: "100%"
		},
		'& label.Mui-focused': { // In Focus
			color: 'rgb(2, 184, 230)'
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'rgb(2, 184, 230)',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'rgb(170, 170, 170)',
			},
			'&:hover fieldset': {
				borderColor: 'rgba(82, 135, 167, 0.692)',
				
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(2, 184, 230)'
			},
		  },
		  '& input:valid + fieldset': {
			borderColor: 'rgba(0, 102, 0, 0.89)',
			borderWidth: 2,
		}
	},
};
const activeReq = {
	root: {
		'&, input, textarea, label':{
			color: "rgb(179, 179, 179)",  // default text color (grey)
			width: "100%"
		},
		'& input:valid + fieldset, & textarea:valid + fieldset': {
			borderColor: 'rgba(0, 102, 0, 0.89)', //validated border color (green)
			borderWidth: 2,
		},
		'& input:invalid + fieldset, & textarea:invalid + fieldset': {
			borderColor: 'rgba(143,0,0,0.9)', //invalid border color (red)
			borderWidth: 2,
		},
		'& label.Mui-focused': { // Label color when in focus (cyan-ish)
			color: 'rgb(2, 184, 230)'
		},
		'& input:valid:focus + fieldset': {
			borderLeftWidth: 6,
			padding: '4px !important', // override inline-style
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'rgb(170, 170, 170)',
			},
			'&:hover fieldset': {
				borderColor: 'rgba(82, 135, 167, 0.692)',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(2, 184, 230)'
			},
		}
  }
};

export { inactiveOpt, inactiveReq, activeOpt, activeReq}