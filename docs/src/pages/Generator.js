import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import DateModule from "../modules/DateModule";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	fixed_generator: {
		position: 'fixed',
		top: '0px',
		left: '0px',
		height: '100%',
		backgroundColor: theme.palette.info.light
	},
	title: {
		textAlign: 'center',
		color: theme.palette.text.primary
	},
	next_button: {
		display: 'flex',
		marginTop: theme.spacing(1),
		marginLeft: 'auto',
		marginRight: 'auto',
	}
}))

function Generator() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3} className={classes.fixed_generator}>
					<h1 className={classes.title}>Заповніть інформацію в полях нижче</h1>
					<Paper className={classes.paper}>
						<h2>Крок 1</h2>
						<h3>Виберіть дату оформлення документу</h3>
						<DateModule/>
						<Button variant='contained' color='primary' className={classes.next_button} endIcon={<NavigateNextIcon />}>
							Наступний крок
						</Button>
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