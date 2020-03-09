import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Date from "../modules/Date";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}))

function Generator() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<Date/>
					</Paper>
				</Grid>
				<Grid item xs={9}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default Generator