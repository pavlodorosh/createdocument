import React from 'react';
import AllLinks from "./constants/Links";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
	base: {
		overflowX: 'hidden',
		fontFamily: 'sans-serif'
	},
}))

function App() {
	const classes = useStyles();

	return (
		<div className={classes.base}>
			<AllLinks/>
		</div>
	)
}

export default App;
